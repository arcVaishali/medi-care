import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPFSPinataJSON from "./IPFSPinataJSON";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import ConsentForm from "./pages/ConsentForm";
import Consenter from "./pages/Consenter";
import ConsentForm2 from "./pages/ConsentForm2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
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
