// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  'postgres://localhost/drinks',
    seeds: {
      directory: './seeds/recipes'
    },
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    seeds: {
      directory: './seeds/recipes'
    },
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  }

};
