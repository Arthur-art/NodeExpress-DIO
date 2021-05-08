# Configurando Nodejs
- npm install cfonts
- criando um arquivo index.js
    - "(
        console.log('Node rodando')
    )"

- no terminal
    - "(
        node index
    )"

# Configurando Express
- npm install express --save
- npm init -y
- Verificando express
    - "(
        const express = require('express')
        const app = express()
        const port = 3000

        app.listen(port, ()=> console.log('Api rodando na porta'+port))
    )"
- node index    