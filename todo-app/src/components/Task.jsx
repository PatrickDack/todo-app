import './Task.css'

function Task({ key, task }) {
  return (
    <p className="task" key={ key } className="task">{ task.task }</p>
  );
}

export default Task
