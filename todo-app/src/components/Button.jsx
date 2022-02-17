import './Button.css'

function Button(props) {
  return (
    <button
      type={ props.type }
      onClick={ props.onClick }
      className={ props.className }
    >{ props.name }</button>
  );
}

export default Button;
