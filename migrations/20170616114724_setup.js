exports.up = function(knex, Promise) {
  return Promise.all(
  	[
  		knex.schema.createTable('authors',function(table){
				table.increments('uid').primary();
				table.string('first_name');
				table.string('last_name');
				table.string('biography');
				table.string('portrait_url');
				table.string('book_id');
  		}),
  		knex('authors').insert({first_name:"Tucker",last_name:"Max",biography:"I am an a..."})
		]
	)
};

exports.down = function(knex, Promise) {
  return Promise.all(
  	[
  		knex.schema.dropTable('authors')
  	]
	)
};
