import React from "react";
const About_Card = ({ thing, open }) => {

  return (
  <div className="col-lg-6">
    <div className="about-card" onClick={() =>  open(thing)}>
      <div className="about-card-body">
          <h6 className="about-card-title">{thing.title}</h6>
          <p className="about-card-content">{thing.about}</p>
      </div>
    </div>
  </div>

  );
}

export default About_Card;