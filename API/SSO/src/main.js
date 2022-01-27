const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

const port = 3002;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
    }
));

routes(app);

const server = app.listen(port, (error) => 
{
    if (error) return console.log(`Error: ${error}`)

    console.log(`Server listening on port ${server.address().port}`);
});
