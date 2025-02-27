import Button from "./Button";
import Image from "./Image";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <h1> Welcome to React + TypeScript</h1>
      <Button btnText="Click Me" color="white" bg="blue" />
      <Button btnText="Sign Up" color="white" bg="green" />

      <div>
        <Image
          src={viteLogo}
          alt="This is a site logo"
          width="100px"
          height="150px"
        />
      </div>
    </> // <-- React Fragment
  );
}
export default App;
