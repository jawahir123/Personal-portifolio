import React from "react";
import data from "../data/index.json"
const Project=()=>{
  return(
    <section id="Projects" className="project--section"> 
      <div className="project--container-box">
        <div className="project--container">
          <p className="sub--title">recent projects:</p>
          <h2 className="section--heading" >my projects</h2>
        </div>
        <div className="project-section-container">
          {data?.portifolio?.map((item,index)=>(
            <div key={index} className="project-section-card"> 
            <div className="project-section-img">
              <img src={item.src} alt="project" 
              width="400px" height="300px" 
               />
            </div>
            <div className="project-card-contant">
              <div>
                <h3 className="project-title">
                  {item.title}
                </h3>
                <p className="text">
                  {item.discription}
                </p>
              </div>
              <p className="project-link">
                {item.link}
              </p>
            </div>
            
            </div>
          )
          )}

        </div>
      </div>
      
    </section>
  )
}
export default Project;