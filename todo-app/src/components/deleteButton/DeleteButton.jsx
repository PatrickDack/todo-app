import Button from "../Button";
import './DeleteButton.css';

function DeleteTaskButton({ onClick, id }) {
  return (
    <Button type="button" className="delete-x" name="x" onClick={ () => onClick(id) }/>
  );
}

export default DeleteTaskButton;
