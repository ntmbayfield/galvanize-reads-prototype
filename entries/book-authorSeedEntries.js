'use strict';

//here lies all the initial seed entries for the books_authors join table
module.exports = [
  //the first book has three authors
  {
    book_id: 1,
    author_id: 1
  },
  {
    book_id: 1,
    author_id: 5
  },
  {
    book_id: 1,
    author_id: 6
  },

  {
    book_id: 2,
    author_id: 2
  },
  {
    book_id: 3,
    author_id: 3
  },
  
  //the last three books are written by the same author
  {
    book_id: 4,
    author_id: 4
  },
  {
    book_id: 5,
    author_id: 4
  },
  {
    book_id: 6,
    author_id: 4
  }
];