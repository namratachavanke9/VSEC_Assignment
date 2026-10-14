
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:3000/students";
const rooms = ["G-101", "G-102", "G-103", "G-104", "G-105"];

function Records() {
  const [students, setStudents] = useState([]);

  function load() {
    fetch(API).then(res => res.json()).then(setStudents);
  }

  useEffect(() => {
    load();
  }, []);

  function update(s) {
    const roomNo = prompt("Enter room: G-101 to G-105");
    if (!roomNo) return;

    const bedNo = prompt("Enter bed number: 1 to 4");
    if (!bedNo) return;

    fetch(API + "/" + s._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomNo: roomNo.trim().toUpperCase(),
        bedNo
      })
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
    if (!window.confirm("Delete this student?")) return;

    fetch(API + "/" + id, { method: "DELETE" })
      .then(() => load());
  }

  return (
    <div className="container">
      <h1>Student Records</h1>

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

      <Link className="page-link" to="/">← Back to Home</Link>
    </div>
  );
}

export default Records;
