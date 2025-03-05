import AutoSaveInput from "./AutoSaveInput";
import Countdown from "./Countdown";
// import ThemeToggle from "./Toggle";

function App() {
  return (
    <>
      {/* <ThemeToggle /> */}
      <div className="container">
        <h1>Implementing Countdown Timer</h1>
        <p>To decrease number every second</p>
      </div>
      <Countdown />
    </> // <-- React Fragment
  );
}
export default App;
