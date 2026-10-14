
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Records from "./Records";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home / Register</Link>
        <Link to="/records">Student Records</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
