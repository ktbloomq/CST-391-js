import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import dotenv from 'dotenv';
import logger from './logger/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';



dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', [albumsRouter, artistsRouter]);
app.use(cors());
app.use(helmet());

if(process.env.NODE_ENV == 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.listen(port, () => {
    // indicate that the server is initialized
    console.log(`Example app listening at http://localhost:${port}`);
});
