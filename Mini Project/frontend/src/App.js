
import React, { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3000/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  function load() {
    fetch(API).then(res => res.json()).then(setStudents);
  }

  useEffect(() => { load(); }, []);

  function add(e) {
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
        alert("Allotted: " + data.roomNo + ", Bed " + data.bedNo);
        setName("");
        load();
      })
      .catch(err => alert(err.message));
  }

  function update(s) {
    const roomNo = prompt("Enter room: G-101 to G-105");
    if (!roomNo) return;

    const bedNo = prompt("Enter bed: 1 to 4");
    if (!bedNo) return;

    fetch(API + "/" + s._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomNo: roomNo.trim().toUpperCase(), bedNo })
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        return data;
      })
      .then(data => {
        alert(data.message);
        load();
      })
      .catch(err => alert(err.message));
  }

  function remove(id) {
    fetch(API + "/" + id, { method: "DELETE" })
      .then(() => load());
  }

  return (
    <div className="container">
      <h1>Girl's Hostel Management System</h1>

      <p>Occupied Beds: {students.length} / 20</p>
      <p>Vacant Beds: {20 - students.length}</p>

      <form onSubmit={add}>
        <h2>Register Student</h2>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter student name"
          required
        />
        <button>Register</button>
      </form>

      <h2>Student Records</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Room</th>
            <th>Bed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.roomNo}</td>
              <td>{s.bedNo}</td>
              <td>
                <button onClick={() => update(s)}>Update</button>
                <button onClick={() => remove(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
