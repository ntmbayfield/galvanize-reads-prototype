'use strict';

exports.up = function(knex, Promise){
	//this creates the books table 
	//  with columns (id, title, genre, description, cover_url)
	return knex.schema.createTable('books',function(table){
		table.increments().primary();
		table.string('title').notNullable();
		table.string('genre').notNullable();
		table.string('description',1000).notNullable();
		table.string('cover_url');
		table.timestamps(true,true);
	});
}

//this drops the 'books' table
exports.down = function(knex,Promise){
	return knex.schema.dropTable('books');
} 