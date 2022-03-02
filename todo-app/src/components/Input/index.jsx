import './Input.css'

function Input(props) {
  return (
    <input
      type={ props.type }
      name={ props.name }
      value={ props.value }
      placeholder={ props.place }
      onChange={ props.onChange }
      className={ props.className }
    />
  );
}

export default Input;
