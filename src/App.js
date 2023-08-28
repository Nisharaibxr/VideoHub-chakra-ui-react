 
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Upload from "./components/Upload";


function App() {
  return (
    <Router>
       <Header/>
    
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/videos" element={<Videos/>} />
        <Route path="/signup" element={< Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/upload" element={<Upload/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
