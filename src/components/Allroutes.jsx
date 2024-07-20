// Navbar.js
import React from "react";
import {
  Box
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Statistics from "./Statistics";
import Contact from "./Contact";
import Resume from "./Resume";

const Allroutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/skill" element={<Skills/>}>Skills</Route>
        <Route path="/projects" element={<Projects/>}>Projects</Route>
        <Route path="/statistics" element={<Statistics/>}>Statistics</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/resume" element={<Resume/>}>Resume</Route>
      </Routes>
    
  );
};

export default Allroutes;
