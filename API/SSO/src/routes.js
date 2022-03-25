import { register, login, confirmEmail } from './queries.js'
import express from 'express'
import path from 'path'
import { verify } from 'crypto'
const __dirname = path.resolve()

export default function router(app) 
{

    app.get('/', async (request, response) => {
        if(request.session.userID === undefined){
            response.redirect('/login')
        }else{
            response.redirect('/app')
        }
    })

    //base API URL. 
    app.get(['/login'], async (request, response) => {
            response.sendFile(path.join(__dirname, './src/LoginBuild', 'index.html'))
    })

    app.get('/auth/confirmEmail', (request, response) =>{
        confirmEmail(request.query.token)
        .then((val) => {
            console.log(val)
            response.redirect('/login')
        }).catch((err) => {
            console.log(err)
        })
    });

    app.get(['/app', '/app/*'], async (request, response) => {
        if(request.session.userID === undefined){
            response.redirect('../login')
        }else{
            response.sendFile(path.join(__dirname, './src/SiteBuild', 'index.html'))
        }
    })

    app.post('/sso/login', async (request, response)  => {
        console.log(request.body)
        await login(request.body).then((val) =>{
            console.log(val)
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
