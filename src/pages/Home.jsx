import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
const Home=()=>{
  return( <div>
      <Header/>
    <Banner/>
    <About/>
    <Skills/>
   
    <Project/>
    <Contact/> 
  
  </div>
  )
};
export default Home;