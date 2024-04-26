import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SignupForm from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/Resume";
import "./index.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Resume" element={<ResumePage />} />
      </Routes>
    </>
  );
}

export default App;
