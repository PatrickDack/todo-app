import './Task.css';
import DeleteButton from './deleteButton/DeleteButton';

function Task({ task, key, onClick }) {
  return (
    <p
      className="task"
      key={ key }
      className="task"
    >
      { task.task }
      <DeleteButton id={ task._id } onClick={ onClick }/>
    </p>
  );
}

export default Task
