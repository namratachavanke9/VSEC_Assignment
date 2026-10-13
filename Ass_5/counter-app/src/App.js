
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>My React App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>{text}</h2>
    </div>
  );
}

export default App;
