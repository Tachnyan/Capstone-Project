import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

var apiRouter = router;

var app = express();
app.use(cors());
app.use(express.json());

app.use ('/', apiRouter);

app.listen(process.env.PORT || '3009', () => {

    console.log('Server running on port: 3009');

});