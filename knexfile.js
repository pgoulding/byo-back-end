// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  'postgres://localhost/drinks',
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  }

};
