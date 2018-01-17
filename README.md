# BookLendingAPI
I made a book lending API. This API can keeps track of a small book lending operation for a small library at home.

## What I used
Javascript and hapi.js

### How does it works?
In NoSQL DB, books are stored with the following information.
&nbsp;&nbsp;isbn
&nbsp;&nbsp;title
&nbsp;&nbsp;author
&nbsp;&nbsp;genre
&nbsp;&nbsp;publicationInfo includes publishedDate and publisher
&nbsp;&nbsp;availability includes lendingsituation



We used postman to test our code. <br />
Also, our sample db structure is the following. <br />
{ <br />
    &nbsp;&nbsp;&nbsp; isbn: '0679722645', <br />
    &nbsp;&nbsp;&nbsp; title: 'The Maltese Falcon', <br />
    &nbsp;&nbsp;&nbsp; author: 'Dashiell Hammett', <br />
    &nbsp;&nbsp;&nbsp; genre: 'crime', <br />
    &nbsp;&nbsp;&nbsp; publicationInfo: { <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;publishedDate: '1930', <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;publisher: 'Vintage Crime/Black Lizard' <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }, <br />
    &nbsp;&nbsp;&nbsp; availability: { <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lendingsituation: 'reserved', <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         copy:{ <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          copyid: '6', <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          edition: '1 edition (July 17 1989)', <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          borrower: 'Lucy' <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         } <br />
  &nbsp;&nbsp;&nbsp; } <br />
} <br />


