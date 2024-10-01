# The Brief

Design and build a simple web app that will fetch book data from an API, and display it. Treat this as if you were building a fully fledged feature, so think about testability, time constraints, etc. Walk us through how you think about building something like this, and explain any shortcuts you're taking along the way. 

This project is [setup using React and TypeScript](./README.md) but feel free to use whichever additional libraries that make sense to you and will allow you to best complete the task.

There are 2 parts to design and build:

1) a front-end that displays the data

2) a back-end API that provides the data 

## Front-end
- The front-end will show a list of books
- For each book, the following pieces of information must be shown
  - Title
  - Author
  - Rating
  - A link to the book which will display further details
- The book details view will display
  - Title
  - ISBN
  - Cover Image
  - Author
  - Rating
- The design will be responsive across devices with 2 variations:
  - Desktop and tablet
  - Mobile

**BONUS: The interface will conform to web accessibility rules.  Anyone should be able to use it.**

## Back-end
The backend will have 2 endpoints

- One to retrieve the list of books
- One to retrieve the details of an individual book

The backend doesn’t require authentication

Back end data is available in 3 formats:

1) [CSV](./src/data/library_data.csv)
2) [JSON](./src/data/library_data.json)
3) PostgreSQL database



## Follow-up exercise (time permitting)
Add search functionality so a user can search for a book

- A user can enter a book title and see the list of matching books
- For each book, the following pieces of information must be shown
  - Title
  - Author
  - Rating
  - A link to the book which will display further details