import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Button from './components/Button';
import Input from './components/Input';
import TaskCard from './components/TaskCard';
import Header from './components/Header';

const API_URL = `http://localhost:3000/create`;

const saveTask = async (task) => {
  await axios.post(API_URL, { task });
};


function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);

  const handleChange = ({ target }) => {
    setTask(target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await saveTask(task)
    task && setTasks([...tasks, { task }]);
    setTask('');
  }

  return (
    <div className="main-container">
      <Header/>
      <TaskCard className="task-card"render={ tasks } />
      <div className='input-container'>
        <Input
          className="input-task"
          place="Insira uma Tarefa"
          value={task} onChange={handleChange}
        />
        <Button
          type="submit"
          name="Adicionar"
          onClick={handleClick}
          className="add-button"
        />
      </div>
    </div>
  );
}

export default App;
