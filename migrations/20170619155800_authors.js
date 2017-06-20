'use strict';

//do these table.string invocations need "notNullable"?  Or something else?
exports.up = (knex) =>
	//this creates the authors table 
	//  with columns (id, first_name, last_name, biography, portrait_url)
	knex.schema.createTable('authors',function(table){
		table.increments().primary();
    table.string('first_name');
    table.string('last_name');
    table.text('biography');
    table.text('portrait_url');
    table.timestamps(true, true);
	})

//this creates the authors table 
exports.down = (knex) => knex.schema.dropTable('authors');
