import express from 'express';
import cors from 'cors';
import router from './routes.js'

import bodyParser from 'body-parser';
const app = express();

const port = 3002;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
    }
));

router(app);

const server = app.listen(port, (error) => 
{
    if (error) return console.log(`Error: ${error}`)

    console.log(`Server listening on port ${server.address().port}`);
});
