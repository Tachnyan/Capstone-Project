import express from 'express';
import cors from 'cors';
import router from './routes.js';
import jwt from 'express-jwt';
import session from 'express-session';

import bodyParser from 'body-parser';
import path from 'path/posix';

import { sessionStore } from './config.js'

const app = express();

const port = 3002;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
    }
));

app.use(session({
    key: 'session_cookie_name',
    secret: "testsadf;lj",
    store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 1296000000,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: false
}))

router(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)

    console.log(`Server listening on port ${server.address().port}`);
});