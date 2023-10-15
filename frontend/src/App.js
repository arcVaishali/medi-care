import {BrowserRouter , Routes , Route } from "react-router-dom"
import IPFSUpload from './IPFSUpload';
import IPFSUploadPinata from "./IPFSUploadPinata";
import File from "./File";
import IPFSPinataJSON from "./IPFSPinataJSON";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path = "/" element = {<IPFSUploadPinata/>}></Route> */}
    {/* <Route path = "/" element = {<File />}></Route> */}
    <Route path = "/" element = {<IPFSPinataJSON />}></Route>
    <Route path="/upload-on-ipfs" element={<IPFSUpload/>}></Route>
    <Route></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
