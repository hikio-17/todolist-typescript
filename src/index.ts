import express from 'express';
import { json } from 'body-parser';
import { routerTodo } from './routes/todo';

const app = express();

app.use(json());
app.use(routerTodo);

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});