'use strict';

exports.up = (knex) =>
	//this creates the books_authors table
	//  with columns (book_uid, author_uid)
  knex.schema.createTable('books_authors', (table) => {
    table.integer('book_uid').references('book_uid').inTable('books');
    table.integer('author_uid').references('author_uid').inTable('authors');
    table.timestamps(true, true);
  });

//this drops the 'books_authors' table
exports.down = (knex) => knex.schema.dropTable('books_authors');