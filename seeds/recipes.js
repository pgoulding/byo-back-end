const totalRecipe = require('../totalRecipe');
// const ingredientDetails = require('../drinks')

const createDrink = (knex, drink) => {
  console.log(drink)
  return (
    knex('recipes')
    .insert(
        {
          name: drink.name || "Unknown",
          category: drink.category || null,
          glass: drink.glass || null,
          image: drink.image || null,
          instructions: drink.instructions || null
        }, 'id' )
      .then(drink_id => {
        let ingredientPromises = [];
        drink.ingredients.forEach(ingredient => {
            ingredientPromises.push(
              createIngredient(knex, ingredient)
                .then(ingredients_id => {
                  let joinPromises = [];
                  joinPromises.push(createJoin(knex, drink_id, ingredients_id, ingredient.amount));
                return Promise.all(joinPromises);
              })
            )
        })
        return Promise.all(ingredientPromises);
      })
  )
}

const createIngredient = (knex, ingredient) => {
  return knex('ingredients').insert(
    {
      name: ingredient.name || null,
      description: ingredient.ingDescription || "No Description Yet",
    }, 'id')
}

const createJoin = (knex, recipe_id, ingredients_id, amount) => {
  return knex('recipe_ingredients').insert({
    recipe_id: parseInt(recipe_id),
    ingredients_id: parseInt(ingredients_id),
    amount: amount
  })
}

exports.seed = knex => {
  return knex('recipes').del()
    .then(() => knex('ingredients').del())
    .then(() => knex('recipe_ingredients').del())
    .then(() => {
      let drinksPromises = [];
      totalRecipe.forEach(drink => {
        if(drink) {
          drinksPromises.push(createDrink(knex, drink));
        }
      })
      return Promise.all(drinksPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
}
