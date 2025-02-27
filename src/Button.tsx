interface ButtonProps {
  btnText: string;
  color: string;
  bg: string;
}

function Button(props: ButtonProps) {
  return (
    <button style={{ color: props.color, backgroundColor: props.bg }}>
      {props.btnText}
    </button>
  );
}

export default Button;
