import React from "react";
import myimg from "../components/banner.jpg"
const Banner=()=>{
  return(
  <div id="BannerSection" className="intro">
     <img className="img" src={myimg} alt="animated img girl" />
     <div className="description">
    <h2 className="title"> Hi, I'm <span>Shukri,</span></h2>
    <h3>A Web  Developer</h3>
    <p className="para">Transforming your digital vision into realty:
      Innovation web Designs <br />
      by aprofessional web Designer!
    </p>
    </div>
      <button className="btn">Start A project</button>
  </div>
  );
};
export default Banner;