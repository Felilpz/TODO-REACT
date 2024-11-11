const express = require('express');

const allTodos = [{ nome: 'Felipe', status: false }];
const todoRoutes = express.Router();

// create
todoRoutes.post('/todos', (request, response) => {
    const { name } = request.body;
    allTodos.push({ name, status: false });
    return response.status(201).json(allTodos);
});
// read
todoRoutes.get('/todos', (request, response) => {
    return response.status(200).json(allTodos);
})
// update
// delete

module.exports = todoRoutes;