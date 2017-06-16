//SELECT author_1_first_name, 
//  author_1_last_name, 
//  author_1_biography,
//  author_1_portrait_url,
//  book_title,id
//FROM raw_data_2;

//this is the query that pulls everything required in my author's table


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      return knex('authors').insert(
        [
          {first_name:"Tucker",last_name:"Max",biography:"I am an a..."}
        ]
      )

      // Inserts seed entries
      // return knex('authors').insert([
      //   {id: 1, colName: 'rowValue1'},
      //   {id: 2, colName: 'rowValue2'},
      //   {id: 3, colName: 'rowValue3'}
      // ]);
    });
};
