import "./App.css";
import Greeter from "./components/Greeter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div data-testid="todo">
        <Todo />
      </div>
      <div data-testid="greeter">
        <Greeter />
      </div>
    </div>
  );
}

export default App;
