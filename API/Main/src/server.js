import express from 'express';
import router from './routes/index.js';

var apiRouter = router;

const app = express();

app.use(express.json());

app.use ('/', apiRouter);

app.listen(process.env.PORT || '3009', () => {

    console.log('Server running on port: 3009');

});