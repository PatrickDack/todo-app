import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import TaskCard from './components/TaskCard';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);

  const handleChange = ({ target }) => {
    setTask(target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    task && setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <div>
      <Input place="Insira uma Tarefa" value={task} onChange={ handleChange }/>
      <Button type="submit" name="Adicionar" onClick={ handleClick }/>
      <TaskCard render={ tasks }/>
    </div>
  );
}

export default App;
