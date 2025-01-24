const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const banco = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gerenciadorTurmas"
})

app.use(express.json());
app.use(cors());

app.get("/usuarios", (req, res) => {
    const login = req.query['login'];
    const senha = req.query['senha'];

    let SQL = `SELECT * FROM Usuarios WHERE login="${login}" AND senha="${senha}"`;

    banco.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})