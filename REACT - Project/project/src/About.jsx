import React from "react";
import './Main.css';


const About = () => {
  return (
    <div className="about" id="about1">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-head">Game theme for each direction and more.</h1>
          <div className="about-p">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem sint ipsa. Officia, sunt accusamus facere, 
            praesentium amet quo magni eveniet maxime, quod fugit quas ex a obcaecati distinctio vero. */}

Welcome to our innovative platform, where gaming, social interaction, and e-commerce come together for an unforgettable experience. We’re dedicated to creating a vibrant community that blends the thrill of gaming with the excitement of shopping and socializing.  With  real-time social interactions, our platform is designed to bring people closer and offer an enjoyable, secure space for gamers and shoppers alike. 
          </div>
          <div className="about-btn">Read More</div>
        </div>
        <div className="image">
          <img src="../images/uncharted.jpg" alt="Uncharted" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
