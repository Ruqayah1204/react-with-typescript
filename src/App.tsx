import { useState } from "react";
import AutoSaveInput from "./AutoSaveInput";
import Countdown from "./Countdown";
import ThemeToggle from "./Toggle";

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <ThemeToggle />
      <div className="container">
        <AutoSaveInput />
        <h1>Implementing Countdown Timer And Hiding of Component</h1>
        <p>To decrease number every second</p>
        <p>Click on the button below to show/hide countdown timer</p>
        <button
          onClick={() => setIsShown((prev) => !prev)}
          className="show-hide-btn"
        >
          {isShown ? "Hide Timer" : "Show Timer"}
        </button>
      </div>
      {isShown && <Countdown />}
      {/* <Countdown /> */}
    </>
  );
}
export default App;
