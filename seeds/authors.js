<<<<<<< HEAD
//SELECT author_1_first_name, 
//  author_1_last_name, 
//  author_1_biography,
//  author_1_portrait_url,
//  book_title,id
//FROM raw_data_2;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      return knex('authors').insert(
        [
          {
            // author_id:1,
            first_name:"Alex",
            last_name:"Martelli",
            biography:"Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
            portrait_url:"https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg ",
            book_id:[1]
          },
          {
            // author_id:2,
            first_name:"Allen",
            last_name:"Downey",
            biography:"Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
            portrait_url:"https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg",
            book_id:[2]
          },
          { 
            // author_id:3,
            first_name:"Bonnie",
            last_name:"Eisenman",
            biography:"Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
            portrait_url:"https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg",
            book_id:[3]
          },
          {
            // author_id:4,
            first_name:"Kyle",
            last_name:"Simpson",
            biography:"Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
            portrait_url:"https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
            book_id:[4,5,6]},
          {},
        ]
      )
    });
};
=======
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
};>>>>>>> error: insert or update on table books_authors violates foreign key constraint
