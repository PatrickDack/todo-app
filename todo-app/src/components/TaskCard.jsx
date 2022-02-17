import Task from './Task';

function TaskCard(props) {
  return (
    <ul
      type={ props.type }
      name={ props.name }
      placeholder={ props.place }
    >
      {
        props.render
          .map((task, index) => <Task key={ index } task={ task }/>)
      }
    </ul>
  );
}

export default TaskCard;
