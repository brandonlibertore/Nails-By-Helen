import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Review from "./pages/Review";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:id" element={<Review />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
