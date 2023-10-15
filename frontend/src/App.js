import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPFSPinataJSON from "./IPFSPinataJSON";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import ConsentForm from "./pages/ConsentForm";
import Consenter from "./pages/Consenter";
import ConsentForm2 from "./pages/ConsentForm2";
import LandingPage from "./pages/LandingPage";
import PatientDashboard from "./pages/PatientDashboard";
import ConsenterDashboard from "./pages/ConsenterDashboard";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patient-dashboard" element={<PatientDashboard />}></Route>
        <Route path="/consenter-dashboard" element={<ConsenterDashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/consent" element={<ConsentForm />}></Route>
        <Route path="/next" element={<ConsentForm2 />}></Route>
        <Route path="/consenter" element={<Consenter />}></Route>
        <Route path="/upload-on-ipfs" element={<IPFSPinataJSON />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
