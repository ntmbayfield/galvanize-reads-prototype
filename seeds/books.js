'use strict';

const books = require('../entries/bookSeedEntries');

exports.seed = function (knex, Promise) {
  return knex('books').del()
    .then( () =>
      knex('books').insert(books)
    )
    .then( () => knex.raw(
    	"SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))")
    );
};