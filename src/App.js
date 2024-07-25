import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ReferralPage } from "./pages/Refer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/refer" element={<ReferralPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
