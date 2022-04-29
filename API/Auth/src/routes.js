import { register, login, confirmEmail, chatLogin } from './queries.js'
import express from 'express'
import path from 'path'
import session from 'express-session';
const __dirname = path.resolve()

import { ajv } from './validation.js'

export default function router(app) 
{

    //Login Request: requires email and password
    app.post('/auth/login', (request, response)  => {
        login(request.body)
        .then((val) =>
        {
            request.session.userID = val;
            request.session.save((err) => {
                if (err){
                    console.log(err);
                    response.sendStatus(500);
                }else{
                    response.sendStatus(200);
                }
            })
        })
        .catch((err) =>{
            response.status(err.code).send(err.msg)
        })
    });

    //route for confirming emails
    app.get('/auth/confirmEmail', (request, response) =>{
        confirmEmail(request.query.token)
        .then((val) => {
            console.log(val)
            response.redirect('/login')
        }).catch((err) => {
            console.log(err)
        })
    });

    //Register Request: requires fname, lname, email, and password. 
    app.post('/auth/register' , async (request, response) => {
        const validate = ajv.getSchema("registration")
        console.log(validate(request.body))
        if(validate(request.body)){
            await register(request.body)
            .then((val) => {
            response.sendStatus(val)
            }).catch((err) => {
            response.sendStatus(err)
            });
        } else {
            response.msg = ("Invalid Request Body")
            response.status(400).send("Invalid Request Body")
        }
    })

    //clears userID from session data. 
    app.get('/auth/logout', async (request, response, next) => {
        if(request.session.userID){
            request.session.destroy((err) => {
                if(err){
                    console.log(err)
                    response.sendStatus(500)
                }else{
                    response.sendStatus(200)
                }
            })
        }else{
            next()
        }
    })

    //gets User_Login and User_Pass to use in the chat room
    app.get('/auth/chatLogin', (request, response) =>{
        let userID = request.session.userID
        chatLogin(userID)
        .then((val) => {
            // get User_Login and User_Pass to StudyRoom.jsx
            response.json(val);
        }).catch((err) => {
            // error
            console.log(err)
            response.sendStatus(err)
        })
    })


    app.get(["/app","/app/*"], (request, response, next) => {
        if(request.session.userID === undefined){
            request.session.destroy((err) => {
                response.redirect('/login')
            })
        }else{
            next()
        }
    })

    app.use("/login", express.static(path.join(__dirname, "/src/LoginBuild")))
    app.use("/app", express.static(path.join(__dirname, "/src/SiteBuild")))


    app.use("/data/*", (request, response, next) => {
        let userID = request.session.userID;
        if (userID === undefined)
        {
            request.session.destroy((err) => {
                if(err){
                    console.log(err)
                }
                response.redirect('/login');
            })
        }else{
            request.body.userID = userID;
            console.log(request.body)
            let url = `${process.env.DATA_URL}${request._parsedOriginalUrl.path.slice(5)}`
            if(url.includes("?")) url += `&userID=${userID}`;
            else url += `?userID=${userID}`;
            console.log(url)
            response.redirect(307, url);
        }
    })

    app.get('*', (request, response) => {
        if(request.session.userID === undefined){
            request.session.destroy((err) => {
                response.redirect('/login')
            })
        }else{
            response.redirect('/app')
        }
    })
}
