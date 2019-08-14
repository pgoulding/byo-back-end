
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('recipes', table=> {
      table.increments('id').primary()
      table.string('name')
      table.string('category')
      table.string('glass')
      table.string('instructions')
      table.string('image')
      table.timestamps(true, true)
    }),
    knex.schema.createTable('recipe_ingredients', table => {
      table.increments('id').primary()

    }),
    knex.schema.createTable('ingredients', table => {
      table.increments('id').primary()
      table.string('ingredient')
      table.string('description')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('ingedients'),
    knex.schema.dropTable('recipes')
  ])
};
