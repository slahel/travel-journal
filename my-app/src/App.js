import "./App.css";
import Earth from "./images/Earth.png";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Earth} className="earth" />{" "}
        <span className="title">my travel journal</span>
      </header>
      <Cards />
    </div>
  );
}

export default App;
