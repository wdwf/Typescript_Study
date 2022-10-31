import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';


const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(userRoutes)

export { app, port }