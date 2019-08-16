const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./connection')
app.use(express.json());
app.use(express.static('public'))
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.locals.title = 'Cocktails and Dreams'

app.get('/', (request, response) => {
  response.send(`Hi There ${app.locals.title}`)
})

app.get('/api/v1/ingredients', (request, response) => {
  dbConnect('ingredients')
    .select('*')
    .then(ingredients => response.json({ingredients}))
})

app.get('/api/v1/ingredients/:id', (request, response) => {
  const { id } =request.params
  dbConnect('ingredients')
    .where({id})
    .then(ingredient => response.json({ingredient}))
})

app.get('/api/v1/recipes/', (request, response) => {
  dbConnect('recipes')
    .select('*')
    .then(recipes => response.json({ recipes }))
})

app.get('/api/v1/recipes/:id', (request, response) => {
  const { id } = request.params
  dbConnect('recipes')
    .where({ id })
    .then(recipe => response.json({ recipe }))
})

app.post('/api/v1/drinks', (request, response) => {
  const { drink } = request.body;

});

app.put('/api/v1/drinks/:id', (request, response) => {
  const { id } = request.params
  const newDrink = request.body

})

app.delete('/api/v1/drinks/:id', (request, response) => {
  const { id } = request.params

  return response.status(202).json(newDrinks)
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost: ${app.get('port')}`)
})