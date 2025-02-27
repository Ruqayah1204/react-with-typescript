interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

function Image(props: ImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height }}
    />
  );
}

export default Image;
