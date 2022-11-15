import Counter from "./components/Counter";
import Divide from "./components/Divide";
import Multiply from "./components/Multiply";
import Subtract from "./components/Subtract";
import {ValueProvider} from "./ValueContext"

function App() {
  return (
    <div className="App">
      <ValueProvider>
 <div className="Upper__components">

    <Multiply />
    <Divide />
    <Subtract />
    </div>

    <Counter />
    </ValueProvider>
    </div>
  );
}

export default App;
