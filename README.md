# MyReads Project

Welcome to MyReads project. I'm glad you took some of your precious time to see it.

MyRead is an application that organizes your reading habits and helps you to make sure you don't read the same book twice ;)

First, you can browse the library by clicking the Add a book on the bottom-right corner of the page, start typing in the search bar and you will see the books coming as you type.

If you found a book you like, just click the arrow in its corner and choose one of the listed options. They are: "Cureently Reading", "Want to Read", "Read" and "None".

You can simply put the books you are reading in the "Cureently Reading" section (or Shelf), the books you want to read in "Want to Read" shelf and the books you have read in "Read" shelf.

If you decided you don't want the book in your shelves, choose "None" from the droplist menu to remove it. To get it back again, you will have to search for it again.


## How will the project work
For the project to run, you will have to do the following:
* open the code in your favorite editor
* in the terminal, install all project dependencies using the command `npm install`
* Run the project server using the command `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.