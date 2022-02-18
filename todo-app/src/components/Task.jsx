import './Task.css'

function Task({ task, key }) {
  return (
    <p className="task" key={ key } className="task">{ task.task }</p>
  );
}

export default Task
