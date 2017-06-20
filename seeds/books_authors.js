'use strict';

const booksAuthors = require('../entries/book-authorSeedEntries.js');

// exports.seed = function(knex, Promise) {
//   return knex('books_authors').del()
//     .then(() =>
//       knex('books_authors').insert(booksAuthors)
//         .then( () =>
//           knex.raw("SELECT setval('books_authors_id_seq',(SELECT MAX(id) FROM books_authors))"))
//         })
//     };
// };

exports.seed = function (knex, Promise) {
  return knex('books_authors').del()
    .then( () =>
       knex('books_authors').insert(booksAuthors)
    )
   .then( () => knex.raw(
      'SELECT setval(\'books_authors_id_seq\', (SELECT MAX(id) FROM books_authors))')
   );
};