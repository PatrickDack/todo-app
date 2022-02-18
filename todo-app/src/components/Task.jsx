import './Task.css'

function Task({ task, key, onClick }) {
  return (
    <p className="task" key={ key } className="task"  onClick={ onClick }>{ task.task }</p>
  );
}

export default Task
