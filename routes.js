	require('dotenv').config();
	const Joi = require('joi');
	const firebase = require('firebase');
	firebase.initializeApp({
	 	databaseURL: "firebaseURL"
	});
	const dbRef = firebase.database().ref('books');

	const bookSchema = {
		isbn: Joi.string().required(),
	    title: Joi.string().required(),
	    author: Joi.string().required(),
	    genre: Joi.string().required(),
	    publicationInfo: {
	              publishedDate: Joi.string().required(),
	              publisher: Joi.string().required()
	             },
	    availability: {
	             lendingsituation: Joi.string().required(),
	             copy:{
	              copyid: Joi.string().required(),
	              edition: Joi.string().required(),
	              borrower: Joi.string().required()
	             }
	     }

	};


	module.exports = [
	  {
	    method: 'GET',
	    path: '/',
	    handler: (request, reply) => {
	      return reply('a simple book lending list example, /books');
	  	}
	  },
	  {//to get all books (the first 5 books)
	    method: 'GET',
	    path: '/books',
	    handler:  (request, reply) => {
	    	let queryfirst5 = dbRef.limitToLast(5);
	    	queryfirst5.once('value', data => {
	    		return reply(data.val());
	    	});
		 }
	  },
	   {//to get one book
	    method: 'GET',
	    path: '/books/{isbn}',
	    handler: async (request, reply) => {
 		    let isbnnum = request.params.isbn;
	    	let queryone = firebase.database().ref('books/' + isbnnum );
	    	queryone.once('value', data => {
	    		if (data) {
	    			return reply(data.val());
	    		} else {
	    			return reply('Not found');
	    		}
	    		
	    	});
	    }  
	  },
	   {//add a book to firebase
	    method: 'POST',
	    path: '/books',
	    config: {
	    	validate: {
	        		payload: bookSchema;
	        }
	     },
	    handler: async (request, reply) => {
	    	 const book = request.payload;
	    	 dbRef.child(`${book.isbn}`).set(book);
	    	 return reply.redirect().location(books);
	    }
	  },
	  {//update the information about a book
	    method: 'PUT',
	    path: '/books/{isbn}',
	    config: {
		      validate: {
		        payload: bookSchema
	           }
		},
	    handler: async (request, reply) => {
	    	 const bookupdate = request.payload;
	    	 dbRef.child(`${bookupdate.isbn}`).update(bookupdate);
	    	 return reply.redirect().location(books/`${bookupdate.isbn}`);
	    }
	  },
	  {//delete one of the books
	    method: 'DELETE',
	    path: '/books/{isbn}',
	    handler: async (request, reply) => {
	      let isbnnum = request.params.isbn;
	      let refdelelete = firebase.database().ref('books/' + isbnnum);
	    	refdelelete.remove(function (error){
	    		if(!error){
	    			return reply ('Succeed in removing Book ISBN ' + isbnnum);	
	    		}else {
	    			return reply('Remove failure');
	    		}
	    	});
	    }
	  },
	  {//queries 
	    method: 'GET',
	    path: '/books/{p*}',
	    handler: queryName
	  }
	]


	async function queryName (request, reply) {
		if (request.query.genre) {
			let genrename = request.query.genre;
			if (genrename === 'mystery'){
					let genrequery = dbRef.orderByChild('genre').equalTo('mystery');
					genrequery.once('value', function(snapshot){
							return reply(snapshot.val()); 
					});
			} else {
				    return reply('There is no mystery of genre in this book list');
			}
	    } else if (request.query.title) {
	    	let titlename = request.query.title;
	    	if (titlename === 'the long goodbye'){
					let titlequery = dbRef.orderByChild('title').equalTo('the long goodbye');
					titlequery.once('value', function(snapshot){
							return reply(snapshot.val()); 
					});
			} else {
				    return reply('There is no "the long goodbye" of title in this book list');
			}
	    } else if (request.query.author) {
	    	let authorname = request.query.author;
	    	if (authorname === 'raymond chandler'){
					let authorquery = dbRef.orderByChild('author').equalTo('raymond chandler');
					authorquery.once('value', function(snapshot){
							return reply(snapshot.val()); 
					});
			} else {
				    return reply('There is no "raymond chandler" of author in this book list');
			}
	    } else {
	    	return reply ('query not recognized.').code(404);
	    }
	}
   

