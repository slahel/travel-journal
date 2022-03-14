import "./App.css";
import Earth from "./images/Earth.png";
import Cards from "./Cards";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <header>
        <img src={Earth} className="earth" />{" "}
        <span className="title">my travel journal</span>
      </header>
      <div>{card}</div>
    </div>
  );
}

export default App;
