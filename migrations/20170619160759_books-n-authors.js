'use strict';

exports.up = (knex) =>
	//this creates the books_authors table
	//  with columns (book_id, author_id)
  knex.schema.createTable('books_authors',function(table) {
  	table.increments();
    table.integer('book_id').references('id').inTable('books');
    table.integer('author_id').references('id').inTable('authors');
    table.timestamps(true, true);
  });

//this drops the 'books_authors' table
exports.down = (knex) => knex.schema.dropTable('books_authors');