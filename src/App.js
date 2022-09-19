import "./App.css";

import Card from "./components/Card/Card";
import mobileBg from "./assets/bg-main-mobile.png";

function App() {
  return (
    <div className="App">
      <div className="fill">
        <img src={mobileBg} className="mobileBg" alt="mobile background" />
        <Card />
      </div>

      <div></div>
    </div>
  );
}

export default App;
