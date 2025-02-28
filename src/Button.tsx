interface ButtonProps {
  btnText: string;
  color: string;
  bg: string;
  onClick?: () => void; // A function type
}

function Button(props: ButtonProps) {
  return (
    <button
      style={{ color: props.color, backgroundColor: props.bg }}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
