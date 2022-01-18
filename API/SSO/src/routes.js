const { response } = require("express");

const users = [{
    id:1,
    name:"one"
},
{
    id:2,
    name:"two"
}];

const router = app => 
{
    app.get('/', (request, response) =>
    {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) =>{
        response.send(users);
    });
}

module.exports = router;