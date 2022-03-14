import "./App.css";
import Earth from "./images/Earth.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Earth} className="earth" />{" "}
        <span className="title">my travel journal</span>
      </header>
      <div></div>
    </div>
  );
}

export default App;
