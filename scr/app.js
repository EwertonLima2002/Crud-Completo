const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const coneccion = mysql.createConnection({
    host:'',
    user: '' , 
    password: '',
    database: ''
})

coneccion.connect((err) => {
    if(err) throw err;
    console.log('Conectado ao banco de dados');
})

app.get('/', (req, res) => {
    return res.send({ error: true, message: 'hello' })
})

app.get('/usuarios', (req, res) => {
    coneccion.query('SELECT * FROM usuarios', (err, result) => {
        if(err) throw err;
        return res.send({ error: false, data: result, message: 'Lista de usuarios.' })
    })
})

app.post('/usuario', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    if(!nome || !email || !senha) {
        return res.status(400).send({ error: true, message: 'Preencha os campos.' })
    }

    coneccion.query('INSERT INTO usuarios SET ? ', { nome: nome, email: email, senha: senha }, (err, result) => {
        if(err) throw err;
        return res.send({ error: false, data: result, message: 'Usuario adicionado com sucesso.' })
    })
})

app.put('/usuario', (req, res) => {
let id = req.body.id;
let nome = req.body.nome;
let email = req.body.email;
let senha = req.body.senha;

   if(!id || !nome || !email || !senha) {
       return res.status(400).send({ error: true, message: 'Preencha os campos.' })
   }
   coneccion.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id], (err, result) => {
         if(err) throw err;
         return res.send({ error: false, data: result, message: 'Usuario atualizado com sucesso.' })
   }
    )})

app.delete('/usuario', (req, res) => {
    let id = req.body.id;
    if(!id) {
        return res.status(400).send({ error: true, message: 'Preencha os campos.' })
    }
    coneccion.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
        if(err) throw err;
        return res.send({ error: false, data: result, message: 'Usuario deletado com sucesso.' })
    })
});

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
})