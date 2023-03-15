import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skill from './Components/Skill';
// import About from './Components/About';
import Project from './Components/Project';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Error404 from './Components/Error404';
import GoBack from './Components/GoBack';


function App() {
  return (
    <div className='dark'>
      <Navbar />
      <GoBack/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
