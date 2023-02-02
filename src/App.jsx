import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
