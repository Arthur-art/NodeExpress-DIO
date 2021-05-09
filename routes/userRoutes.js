//modulo nativo do nodejs fs (File system)
const fs = require('fs')
const { join } = fs

//Caminho para arquivo json, para simular a interação com banco de dados
const filePath = join(__dirname, 'users.json')

//Verificando se o arquivo existe no caminho acima, se não existir, data valera um array vazio
const getUsers = () => {
    const data = fs.existsSync(filePath) ? fs.readSync(filePath) : [];

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

//Salvando o usuario que irá retornar de gerUsers

console.log(getUsers)