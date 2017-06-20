'use strict';

//do these table.string invocations need "notNullable"?  Or something else?
exports.up = (knex) =>
	//this creates the books table 
	//  with columns (book_uid, title, genre, description, cover_url)
	knex.schema.createTable('books',function(table){
		table.increments('book_uid').primary();
		table.string('title');
		table.string('genre');
		table.string('description');
		table.string('cover_url');
		table.timestamps(true,true);
	});

//this drops the 'books' table
exports.down = (knex) => knex.schema.dropTable('books');