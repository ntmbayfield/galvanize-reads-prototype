// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection:{
      host: "localhost",
      user: "justin.baize",
      password:"",
      database: 'second_try'
    }
  },

  // staging: {},

  production: {
    // client: 'postgresql',
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
  }

};
