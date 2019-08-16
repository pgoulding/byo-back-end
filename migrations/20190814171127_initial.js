
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('recipes', table=> {
      table.increments('id').primary()
      table.string('name')
      table.string('category')
      table.text('instructions')
      table.string('glass')
      table.string('image')
      table.timestamps(true, true)
    }),
    knex.schema.createTable('recipe_ingredients', table => {
      table.increments('id').primary()
      table.string('amount')
      table.integer('recipe_id').unsigned()
        table.foreign('recipe_id').references('recipes.id')
      table.integer('ingredients_id').unsigned()
        table.foreign('ingredients_id').references('ingredients.id')
    }),
    knex.schema.createTable('ingredients', table => {
      table.increments('id').primary()
      table.string('name')
      table.text('description')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('recipe_ingredients'),
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('recipes')
  ])
};
