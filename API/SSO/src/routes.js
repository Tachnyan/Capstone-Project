import { LogTimings } from 'concurrently';
import { response } from 'express';
import { register, login } from './queries.js'

export default function router(app) 
{
    //base API URL. 
    app.get('/sso', (request, response) =>
    {
        response.sendStatus(404);
    });

    //login test call.
    app.get('/sso/login', async (request, response)  => {
        console.log(request.body)
        await login(request.body).then((val) =>{
            response.sendStatus(val)
        })
    });

    app.post('/sso/register' , async (request, response) => {
        await register(request.body).then((val) => {
            console.log(val)
            response.sendStatus(val)
        })
        
    })
}
