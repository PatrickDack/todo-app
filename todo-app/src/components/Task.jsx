function Task({ key, task }) {
  return (
    <li key={ key } className="task">{ task }</li>
  );
}

export default Task
