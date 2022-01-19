const pool = require('./config');

const router = app => 
{
    app.get('/', (request, response) =>
    {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) =>{
        pool.query('select * from users', (error, result) =>{
            if (error) throw error;

            response.send(result);
        });
    });

    app.get('/users/:id', (request, response) =>{
        const id = request.params.id;

        pool.query('select * from users where id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
}

module.exports = router;