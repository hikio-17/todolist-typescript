import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { routerTodo } from './routes/todo';

const app = express();

app.use(json());
app.use(routerTodo);

/** CONNET TO DATABASE */
mongoose.connect('mongodb://localhost:27017/todo')

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});