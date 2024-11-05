const express = require('express');
const todoRoutes = require('./todos.routes')
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    return res.json('uping')
});

let port = 3333;

app.listen(port, () => console.log(`Servidor está online na porta ${port}`))