import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import viteLogo from "/vite.svg";

function App() {
  const [num, setNum] = useState<number>(1);

  //A function for increasing the number
  const increaseNum = () => {
    setNum(num + 1);
    console.log("Add button clicked");
  };

  console.log(num);

  //function for decreasing the number
  const decreaseNum = () => {
    setNum(num - 1);
    console.log("Decrease by one");
  };

  return (
    <>
      <h1> Welcome to React + TypeScript</h1>
      <h2>Counting : {num}</h2>
      <Button
        btnText="Increase"
        color="white"
        bg="blue"
        onClick={increaseNum}
      />
      <Button
        btnText="Decrease"
        color="white"
        bg="green"
        onClick={decreaseNum}
      />

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
