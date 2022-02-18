const express = require('express');
const taskController = require('./controllers/taskController');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:3001`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.get('/tasks', taskController.getAll);
app.post('/tasks', taskController.create);


app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) });
