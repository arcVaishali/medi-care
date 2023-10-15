import logo from './logo.svg';
import './App.css';
import Register from './pages/Register'
import Login from './pages/Login'
import ConsentForm from './pages/ConsentForm';
import Consenter from './pages/Consenter';
import ConsentForm2 from './pages/ConsentForm2';
import Auth from "./pages/Auth"
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <LandingPage></LandingPage>
     {/* <Register></Register> */}
     {/* <Login></Login> */}
     {/* <ConsentForm></ConsentForm> */}
     {/* <ConsentForm2></ConsentForm2> */}
     {/* <Auth></Auth> */}
      {/* <Consenter></Consenter> */}
     <Navbar></Navbar>
    </>
  );
}

export default App;
