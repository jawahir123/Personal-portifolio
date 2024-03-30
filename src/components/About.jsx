import React from "react";
const About=()=>{
  return(
    <section id="About" className="about--section" >
      <div className="about--section--img">
        <img src="./images/banner.jpg" alt="picture aboutme"
         width="500px" height="400px" />
      </div>
      <div >
        <p className="section--title">my background</p>
        <h1 className="section--heading">About me</h1>
        <p className="discription">
          Hi,<span> my name is Shukri Muse Abdi,</span> <br />
          i'm highly motivated and results-oriented ca student currently in my 3rd year, <br />
           with strong passion  for programmin . <br />
           <span> I have honed my abilities in object-oriented programming,</span> 
           data structures (e.g., arrays, linked lists, trees), and algorithms 
           (e.g., sorting, searching).
        </p>
      </div>

    </section>
    

  )
}
export default About;