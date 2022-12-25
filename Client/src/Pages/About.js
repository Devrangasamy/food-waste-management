import React from "react";
import orphange from "../assets/orphans.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about" style={{ backgroundColor: "white" }}>
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${orphange})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p style={{ textAlign: "center" }}>
          This website is created to help the poor needy people.In India nearly
          about 1000 people sleep without food who are really unfortunate to get
          food food and cause disease like Starvation, Malnutrition etc. So the
          main aim is to stop hunger and provide them with food.
        </p>
      </div>
    </div>
  );
}

export default About;
