const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(express.static('public'))
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.locals.title = 'Cocktails and Dreams'

app.get('/', (request, response) => {
  response.send(`Hi There ${app.locals.title}`)
})

app.get('/api/v1/drinks', (request, response) => {

})

app.get('/api/v1/drinks/:id', (request, response) => {
  const { id } = request.params

})

app.get('/api/v1/ingredients', (request, response) => {

})

app.get('/api/v1/ingredients/:id', (request, response) => {

})

app.get('/api/v1/recipes/', (request, response) => {

})

app.get('/api/v1/recipes/:id', (request, response) => {

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