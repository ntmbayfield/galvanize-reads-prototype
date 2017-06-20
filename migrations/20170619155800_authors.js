'use strict';

//do these table.string invocations need "notNullable"?  Or something else?
exports.up = function(knex,Promise){
	//this creates the authors table 
	//  with columns (id, first_name, last_name, biography, portrait_url)
	return knex.schema.createTable('authors',function(table){
		table.increments().primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('biography',1000).notNullable();
    table.string('portrait_url');
    table.timestamps(true, true);
	})
}

//this creates the authors table 
exports.down = function(knex,Promise) {
	return knex.schema.dropTable('authors');
} 
