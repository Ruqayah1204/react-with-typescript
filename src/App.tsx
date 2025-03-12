import Products from "./Products";
function App() {
  return (
    <>
      <Products />
    </>
  );
}
export default App;

// <ThemeToggle />
//       <div className="container">
//         <AutoSaveInput />
//         <h1>Implementing Countdown Timer And Hiding of Component</h1>
//         <p>To decrease number every second</p>
//         <p>Click on the button below to show/hide countdown timer</p>
//         <button
//           onClick={() => setIsShown((prev) => !prev)}
//           className="show-hide-btn"
//         >
//           {isShown ? "Hide Timer" : "Show Timer"}
//         </button>
//       </div>
//       {isShown && <Countdown />}
//       <Countdown />
