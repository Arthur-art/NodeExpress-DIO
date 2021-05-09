const express = require('express')
const useRoutes = require('./routes/userRoutes')


const app = express()
const port = 3000

app.listen(port, () => console.log('Rodando...'))

app.get('/', (req, res) => res.send('Hello World'))