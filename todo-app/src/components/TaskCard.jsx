import Task from './Task';
import './TaskCard.css'

function TaskCard(props) {
  return (
    <div
      className={ props.className }
      type={ props.type }
      name={ props.name }
      placeholder={ props.place }
    >
      {
        props.render
          .map((task, index) => <Task key={ index } task={ task }/>)
      }
    </div>
  );
}

export default TaskCard;
