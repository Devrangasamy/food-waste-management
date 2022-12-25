import React from "react";
import orphange from "../assets/o1.jpg";
import "../styles/Ourmission.css";
function Ourmission() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${orphange})` }}
      ></div>
      <div className="aboutBottom">
        <h1> OUR MISSION</h1>
        <p style={{textAlign:"center"}}>
        Food waste management addresses how much food is thrown away in a community and how the waste is handled. Food waste in landfills emits methane, a potent greenhouse gas. Food waste can be reduced through practices such as proper storage, avoiding excess purchasing and preparation, and donations of excess food instead of disposal.
        </p>
      </div>
    </div>
  );
}

export default Ourmission;