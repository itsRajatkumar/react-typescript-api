import Home from "./Home";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
