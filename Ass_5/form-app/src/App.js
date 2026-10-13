
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Input from "./Input";
import Display from "./Display";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Input
              setName={setName}
              setAge={setAge}
              setGender={setGender}
              setCity={setCity}
              setState={setState}
            />
          }
        />

        <Route
          path="/display"
          element={
            <Display
              name={name}
              age={age}
              gender={gender}
              city={city}
              state={state}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
