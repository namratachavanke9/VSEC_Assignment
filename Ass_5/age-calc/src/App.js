
import { useState } from "react";
import "./App.css";

function App() {
  const [birth, setBirth] = useState("");
  const [current, setCurrent] = useState("");
  const [age, setAge] = useState("");

  function calculateAge() {
    if (birth === "" || current === "") {
      alert("Please enter both dates");
      return;
    }

    const b = birth.split("-").map(Number);
    const c = current.split("-").map(Number);

    const birthDate = new Date(b[2], b[1] - 1, b[0]);
    const currentDate = new Date(c[2], c[1] - 1, c[0]);

    if (
      b.length !== 3 || c.length !== 3 ||
      birthDate.getDate() !== b[0] ||
      birthDate.getMonth() !== b[1] - 1 ||
      currentDate.getDate() !== c[0] ||
      currentDate.getMonth() !== c[1] - 1 ||
      birthDate > currentDate
    ) {
      alert("Please enter valid dates");
      return;
    }

    let years = c[2] - b[2];
    let months = c[1] - b[1];
    let days = c[0] - b[0];

    if (days < 0) {
      months--;
      days += new Date(c[2], c[1] - 1, 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(years + " years, " + months +
      " months, " + days + " days");
  }

  return (
    <div className="container">
      <h2>Age Calculator</h2>

      <label>Date of Birth (DD-MM-YYYY)</label>
      <input
        type="text"
        placeholder="    "
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />

      <label>Current Date (DD-MM-YYYY)</label>
      <input
        type="text"
        placeholder="    "
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />

      <button onClick={calculateAge}>Calculate Age</button>

      <h3>{age}</h3>
    </div>
  );
}

export default App;
