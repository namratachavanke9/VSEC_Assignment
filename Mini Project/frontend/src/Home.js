
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:3000/students";

function Home() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function load() {
    fetch(API).then(res => res.json()).then(setStudents);
  }

  useEffect(() => {
    load();
  }, []);

  function register(e) {
    e.preventDefault();

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        return data;
      })
      .then(data => {
        alert("Room: " + data.roomNo + ", Bed: " + data.bedNo);
        setName("");
        load();
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="container">
      <h1>Girls' Hostel Management</h1>

      <div className="summary">
        <p>Occupied Beds: {students.length} / 20</p>
        <p>Vacant Beds: {20 - students.length}</p>
      </div>

      <form onSubmit={register}>
        <h2>Register Student</h2>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter student name"
          required
        />
        <button type="submit">Register</button>
      </form>

      <Link className="page-link" to="/records">
        View Student Records →
      </Link>
    </div>
  );
}

export default Home;
