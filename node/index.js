const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

var resultado = "";

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const createTable = `CREATE TABLE IF NOT EXISTS people (
    id int not null auto_increment, 
    name VARCHAR(255), 
    primary key(id)
)`
connection.query(createTable, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
})

const insert = "INSERT INTO people(name) values('Matheus'),('Wesley'),('Full Cycle'),('Rocks')"
connection.query(insert)

const select = "SELECT * FROM people"
connection.query(select,
    function (err, results){
        if (err) throw err
        resultado = results.map(result => `<li>${result.name}</li>`).join('')
    }
)
connection.end()

app.get('/', (req,res) => {
    res.send(`<h1>Full Cycle Rocks!</h1><p>- Lista de nomes cadastrada no banco de dados:</p><ul>${resultado}</ul>`);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})