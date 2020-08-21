var express = require('express');
var router = express.Router();
const todos= require('../models/todos');

const myTodos= {
  listOfTodos: todos.todoList
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment' });
});

router.get('/todoslist', function (req,res){
  console.log(myTodos);
  res.render('index.ejs', myTodos)
})

router.post('/todosform', function (req,res) {
  // console.log(myTodos)
  todos.todoList.push(req.body.addtodos)
  // console.log(req.body.addtodos)
  // console.log(myTodos)
  res.render("index.ejs", myTodos)
})

module.exports = router;
