
import { useNavigate } from "react-router-dom";
import "./Input.css";

function Input({
  setName,
  setAge,
  setGender,
  setCity,
  setState
}) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/display");
  }

  return (
    <div className="page-container">
      <div className="form-box">

        <h1>Enter Your Details</h1>

        <form onSubmit={handleSubmit}>

          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /><br />

          <label>Age: </label>
          <input
            type="number"
            min="1"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br /><br />

          <label>Gender: </label>
          <select
            defaultValue=""
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">
              Prefer not to say
            </option>
          </select>
          <br /><br />

          <label>City: </label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <br /><br />

          <label>State: </label>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            required
          />
          <br /><br />

          <button type="submit">Submit Details</button>

        </form>

      </div>
    </div>
  );
}

export default Input;
