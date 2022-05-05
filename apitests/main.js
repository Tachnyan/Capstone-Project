import express from 'express';
import cors from 'cors';


import bodyParser from 'body-parser';



import path from 'path';
import {config} from 'dotenv';
config({path: path.resolve(process.cwd(), '../../.env')})

const app = express();

const port = 3002;

app.use("/*", (req,res,next) => {
    console.log(req.baseUrl);
})

app.use(cors(
    {
        origin: `${process.env.AUTH_URL}`,
        optionsSuccessStatus:  200
    }
))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
    }
));


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)

    console.log(`Server listening on port ${server.address().port}`);
});