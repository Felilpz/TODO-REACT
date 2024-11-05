const express = require('express');

const allTodos = [{ nome: 'Felipe', status: false }];
const todoRoutes = express.Router();

// create
todoRoutes.post('/todos', (request, response) {
    const { name } = response.body
    allTodos.push([name: status: false])
    return response.status(201).json(allTodos)
})
// read
// update
// delete

module.exports = todoRoutes;