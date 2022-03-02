import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './components/Button';
import Input from './components/Input';
import TaskCard from './components/TaskCard';
import Header from './components/Header';


const API_URL_TASK = `http://localhost:3000/tasks`;

const saveTask = async (task) => {
  const { data } = await axios.post(API_URL_TASK, { task });

  return data;
};

const getTasks = async () => axios.get(API_URL_TASK);

const deleteTask = async (id) => axios.delete(`${API_URL_TASK}/delete/${id}`);


function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const { data } = await getTasks();
    setTasks(data);
  }, []);

  const handleChange = ({ target }) => {
    setTask(target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const newTask = task && await saveTask(task)
    task && setTasks([...tasks, newTask ]);
    setTask('');
  }

  const handleDeleteTask = async (id) => {
    await deleteTask(id);

    const { data } = await getTasks();
    setTasks(data);
  }

  return (
    <div className="main-container">
      <Header/>
      <TaskCard className="task-card" render={ tasks } fn={ handleDeleteTask }/>
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
