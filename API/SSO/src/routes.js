import { register, login } from './queries.js'
import express from 'express'
import path from 'path'
import session from 'express-session';
const __dirname = path.resolve()

export default function router(app) 
{

    //Login Request: requires email and password
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

    //Register Request: requires fname, lname, email, and password. 
    app.post('/sso/register' , async (request, response) => {
        await register(request.body)
        .then((val) => {
            response.sendStatus(val)
        }).catch((err) => {
            response.sendStatus(err)
        })
        
    })

    //clears userID from session data. 
    app.get('/auth/logout', (request, response) => {
        request.session.userID = undefined;
        app.session.save()
        response.sendStatus(200)
    })


    app.get(["/app","/app/*"], (request, response, next) => {
        if(request.session.userID === undefined){
            response.redirect("../login")
        }else{
            next()
        }
    })

    app.use("/login", express.static(path.join(__dirname, "/src/LoginBuild")))
    app.use("/app", express.static(path.join(__dirname, "/src/SiteBuild")))


    app.get('*', (request, response) => {
        if(request.session.userID === undefined){
            response.redirect('/login')
        }else{
            response.redirect('/app')
        }
    })
}
