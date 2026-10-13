
function Display({ name, age, gender, city, state }) {
  return (
    <div>
      <center>
      <h1>Your Details</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      
      </center>
    </div>
  );
}

export default Display;
