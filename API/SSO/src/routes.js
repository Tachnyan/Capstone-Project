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
    app.post('/sso/login', async (request, response)  => {
        await login(request.body).then((val) =>{
            request.session.userID = val
            request.session.save()
            response.sendStatus(200)
        }).catch((err) =>{
            response.sendStatus(err)
        })
    });

    app.post('/sso/register' , async (request, response) => {
        await register(request.body)
        .then((val) => {
            response.sendStatus(val)
        }).catch((err) => {
            response.sendStatus(err)
        })
        
    })
}
