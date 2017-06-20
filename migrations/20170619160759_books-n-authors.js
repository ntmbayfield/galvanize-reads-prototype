'use strict';

exports.up = function(knex,Promise){
	//this creates the books_authors table
	//  with columns (book_id, author_id)
  return knex.schema.createTable('books_authors',function(table) {
  	table.increments();
    table.integer('book_id').references('id').inTable('books').notNullable();
    table.integer('author_id').references('id').inTable('authors').notNullable();
    table.timestamps(true, true);
  });
}

//this drops the 'books_authors' table
exports.down = function(knex,Promise){
  return knex.schema.dropTable('books_authors');
};