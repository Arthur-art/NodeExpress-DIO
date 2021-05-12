const express = require('express')
const userRoute = require('./routes/userRoutes')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = 2000

userRoute(app)

app.listen(port, () => console.log('Rodando...'))

app.get('/', (req, res) => res.send('Hello World'))