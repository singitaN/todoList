# To-Do-List---Node




Write a small To-do app. Here are the app requirements   



1. The app should have an input box with a submit button.

2. Upon submitting the added task must display last on the list.

3. Next to each task must be a delete sign or button


 Hints


Here is a list of items(not complete) you will need as you build the app.


1. Routes: 



Here is a list of routes you will need in this app


/todo : Display task list

/todo/add : Add a task

/todo/delete/:id : delete a task


Here is how you will implement routes 


.post('/todo/add/', function(req, res) {


})


Or 


.get('/todo', function(req, res) {


});


// ...




2. Express a well-known framework.

3. EJS or other templating systems to help you build HTML pages to display tasks.

4. Cookie-session 

5. body-parser


All these can be loaded as follow :


{

    "name": "my-todolist",

    "version": "0.1.0",

    "dependencies": {

        "express": "~4.11.0",

        "ejs": "~2.1.4",

        "cookie-session": "~1.1.0",

        "body-parser": "~1.10.1"

    },

    "author": "My name <my email@email.com>",

    "description": "A simple todo list app"

}



Enjoy
