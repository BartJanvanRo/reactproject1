import logo from './logo.svg';
import './App.css';
import Text1 from './component';
import Comp1 from './Product';
import pic1 from "./images/schoen.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="pairbox">
          <Comp1
            name="Dragondog"
            profession="Shakira taimer"
            age={new Date().getFullYear() - 1981}
            foto={pic1}
          />

          <Comp1
            name="Demon Britney"
            profession="The source of alll evil."
            age={new Date().getFullYear() - 1666}
            foto={pic1}
          />
        </div>

      </header>
    </div>
  );
}

export default App;
