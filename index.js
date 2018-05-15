const session = require("cookie-session");
const express = require("express");
const path = require("path");

//
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

// initialize app
const app = express();

// load view Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


app.use(session({secret:'8945kkd'}));
app.use(urlencodedParser);

app.use(function(req, res, next) {
    if(!req.session.todoapp){
           req.session.todoapp = [] ;
         }
    next();
});


// home page
app.get('/', function(req,res, next){

    // res.render('index', {title:'To-Do-List'});
    // handling render for redirected "data" from todo/add handler
    res.render('index', {data: req.session.todoapp});
    next();
    //console.log(req.session.todoapp);
});


// add list
app.post('/todo/add', urlencodedParser, function(req, res){

    if(req.body.task !=''){
    req.session.todoapp.push(req.body.task);

    }
    // redirect files to be renderd on the page
    res.redirect('/');

});

// todo
app.get('/todo',function(req,res){
    res.send('ToDo');
});

// delete todo
app.get('/todo/delete/:id',function(req,res){
    var id = req.params.id;

     if(id){
         // remove selected id
         req.session.todoapp.splice(id, 1);
     } 

    // redirected
    res.redirect('/');
});

app.listen(8080);
