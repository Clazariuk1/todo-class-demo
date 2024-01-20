// create the express app object and add my middleware
const express = require('express')
const app = express()
const todoRouter = require('./routes/todoRouter')

// middleware
app.use(express.json()) // bodyParser middleware for json apis
app.use(express.urlencoded({ extended: true })) // bodyParser middleware for SSR Apps
app.use('/todos', todoRouter)

module.exports = app
