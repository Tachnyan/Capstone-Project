import { register, login } from './queries.js'
import express from 'express'
import path from 'path/posix'
const __dirname = path.resolve()

export default function router(app) 
{
    //base API URL. 
    app.get(['/app', '/app/*'], async (request, response) => {
        response.sendFile(path.join(__dirname, './src/LoginBuild', 'index.html'))
    })

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
