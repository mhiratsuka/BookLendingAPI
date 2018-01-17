# BookLendingAPI
I made a book lending API. This API can keeps track of a small book lending operation for a small library at home.

## What I used
Javascript and hapi.js<br />
We used postman to test our code. <br />

### How does it works?
In NoSQL DB, books are stored with the following information.<br />
&nbsp;&nbsp;--isbn<br />
&nbsp;&nbsp;--title<br />
&nbsp;&nbsp;--author<br />
&nbsp;&nbsp;--genre<br />
&nbsp;&nbsp;--publicationInfo{<br />
&nbsp;&nbsp;----publishedDate<br />
&nbsp;&nbsp;----publisher<br />
&nbsp;&nbsp;--}<br />
&nbsp;&nbsp;--availability{<br />
&nbsp;&nbsp;----lendingsituation<br />
&nbsp;&nbsp;----copy{<br />
&nbsp;&nbsp;------copyid<br />
&nbsp;&nbsp;------edition<br />
&nbsp;&nbsp;------borrower<br />
&nbsp;&nbsp;-----}<br />
&nbsp;&nbsp;---}<br />




