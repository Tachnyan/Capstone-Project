import express from 'express';
import cors from 'cors';
import router from './routes.js'
import jwt from 'express-jwt'
import session from 'express-session'

import bodyParser from 'body-parser';
import path from 'path/posix';
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
    cookie: {
        secure: false,
        maxAge: 1296000000
    },
    resave: false,
    saveUninitialized: true,
    secret: "testsadf;lj"
}))

router(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)

    console.log(`Server listening on port ${server.address().port}`);
});
