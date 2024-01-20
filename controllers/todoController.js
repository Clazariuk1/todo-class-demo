const Todo = require('../models/todo')

exports.index = async function index (req, res) {
 try {
    const todos = await Todo.find({})
    res.status(200).json(todos)
 } catch (error) {
    res.status(400).json({ msg: error.message })
 }
}

exports.create = async function create(req, res) {
    try {
      const todo = await Todo.create(req.body)
      res.status(200).json(todo)
    } catch (error) {
      res.status(400).json({ msg: error.message })
    }
}

exports.update = async function update(req, res) {
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true } )
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.destroy = async function destroy(req, res) {
    try {
     const deleted = await Todo.findOneAndDelete({ _id: req.params.id })
     res.status(200).json({msg: `The todo with the Id of ${deleted._id}  was deleted from the MongoDB database, no further action necessary`})

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.show = async function show(req, res) {
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.status(200).json(foundTodo)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
