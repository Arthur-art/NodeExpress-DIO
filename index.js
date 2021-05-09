const express = require('express')
const userRoute = require('./routes/userRoutes')


const app = express()
const port = 3000

userRoute(app)

app.listen(port, () => console.log('Rodando...'))

app.get('/', (req, res) => res.send('Hello World'))