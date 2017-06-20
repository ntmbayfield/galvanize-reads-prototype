'use strict';

const authors = require('../entries/authorSeedEntries');

exports.seed = function (knex, Promise) {
  return knex('authors').del()
    .then( () =>
      knex('authors').insert(authors)
    )
    .then( () => knex.raw(
      "SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors))")
    );
};