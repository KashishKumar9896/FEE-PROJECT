import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="contact" id="contact">
        <div className="contact-container">
          <h2 className="contact-head">Connect Socially with Arcadix</h2>
          <div className="icons">
            <div className="icon-contain">
              <i className="fa-brands fa-square-facebook" id="icon"></i>
              <p className="icon-p">Like on Facebook</p>
            </div>
            <div className="icon-contain">
              <i className="fa-brands fa-square-x-twitter" id="icon"></i>
              <p className="icon-p">Follow on Twitter</p>
            </div>
            <div className="icon-contain">
              <i className="fa-brands fa-instagram" id="icon"></i>
              <p className="icon-p">Follow on Instagram</p>
            </div>
            <div className="icon-contain">
              <i className="fa-brands fa-square-youtube" id="icon"></i>
              <p className="icon-p">Watch on YouTube</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="contact-foot">nk @ 2024. All rights reserved</div>
    </div>
  );
};

export default Contact;
