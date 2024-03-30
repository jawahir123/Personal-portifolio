import React from "react";
import data from "../data/index.json"
const Skills =()=>{
  return(
   <section id="Skills" className="skills--section"
    ><div>
      <p className="section--title">My skill:</p>
      <h3 className="section--heading">my experts</h3></div>
      <div className="skills--section--container">
        {data?.skills?.map((item,index)=>(
          <div key={index} className="skills-section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="backend languages"  width="90px" height="80px"/>
              </div> 
              <div>
                <h3 className="skills--section-title">
                  {item.title}
                </h3>
                <p className="skills-section-discription">
                  {item.discription}
                </p>

              </div>

          </div>
        ))}
      </div>
      </section>
  )
}
export default Skills;