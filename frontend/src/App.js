import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPFSUpload from "./IPFSUpload";
import IPFSPinataJSON from "./IPFSPinataJSON";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import ConsentForm from "./pages/ConsentForm";
import Consenter from "./pages/Consenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/" element = {<IPFSUploadPinata/>}></Route> */}
        {/* <Route path = "/" element = {<File />}></Route> */}
        <Route path="/" element={<IPFSPinataJSON />}></Route>
        <Route path="/upload-on-ipfs" element={<IPFSUpload />}></Route>
        <Route></Route>
      </Routes>

      <Register></Register>
      <Login></Login>
      <ConsentForm></ConsentForm>
      <Consenter></Consenter>
    </BrowserRouter>
  );
}

export default App;
