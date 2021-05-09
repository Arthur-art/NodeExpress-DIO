//modulo nativo do nodejs fs (File system)
const fs = require('fs')
const { join } = require('path')

//Caminho para arquivo json, para simular a interação com banco de dados
const filePath = join(__dirname, 'users.json')

//Verificando se o arquivo existe no caminho acima, se não existir, data valera um array vazio
const getUsers = () => {
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

//Salvando os dados dos usuarios criando arquivo users.json
const saveUsers = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))


const userRoute = (app) => {
    app.route('/users/:id?').get((req, res) => {
        const users = getUsers()
        res.send({ users })
    })
        //Metodo para criação de usuario
        .post((req, res) => {
            const users = getUsers()

            users.push(req.body)
            saveUsers(users)

            res.status(201).send('OK')
        })
        //Metodo para atualização de usuarios
        .put((req, res) => {
            const users = getUsers()

            saveUsers(users.map(user => {
                if (user.id === req.params.id) {
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user
            }))

            res.status(200).send('OK')
        })
}

module.exports = userRoute