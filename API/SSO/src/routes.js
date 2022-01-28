const pool = require('./config');

const router = app => 
{
    //base API URL. 
    app.get('/sso', (request, response) =>
    {
        response.sendStatus(404);
    });

    //login test call.
    app.get('/sso/login/test', (request, response)  => {
        console.log(request);

        response.send({
            message: 'test'
        });
    });
}

module.exports = router;