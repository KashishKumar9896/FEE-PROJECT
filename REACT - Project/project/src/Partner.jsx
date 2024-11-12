import React from 'react';

const PartnersAndOptions = () => {
  return (
    <div>
      {/* Partner Section */}
      <div className="partner">
        {/* <img src="images/witcher.jpg" alt="" className="part-img" /> */}
        <div className="partner-main">
          <div className="partner-head">PARTNERS</div>
          <div className="partners">
            <img src="../images/epic.png.png" alt="Epic Games Logo" className="part-logo" id="epic" />
            <img src="../images/unreal.png" alt="Unreal Engine Logo" className="part-logo" id="unreal" />
            <img src="../images/playstation.png" alt="PlayStation Logo" className="part-logo" id="playstation" />
            <img src="../images/steam.png" alt="Steam Logo" className="part-logo" id="steam" />
            <img src="../images/xbox.png" alt="Xbox Logo" className="part-logo" id="xbox" />
          </div>
        </div>
      </div>

      {/* Options Section */}
      <div className="options">
        <div className="options-head">Why Buy from Us</div>
        <div className="options-container">
          <a className="options-parallelogram" href="">
            <i className="fa-brands fa-cc-visa" id="visa"></i>
            <h3 className="opt-par-head">Payment</h3>
            <h2 className="opt-par-p">More than 10 payment systems</h2>
          </a>
          <a className="options-parallelogram" href="">
            <i className="fa-solid fa-gamepad" id="game"></i>
            <h3 className="opt-par-head">Games</h3>
            <h2 className="opt-par-p">A large number of games</h2>
          </a>
          <a className="options-parallelogram" href="">
            <i className="fa-solid fa-money-bill-1-wave" id="money"></i>
            <h3 className="opt-par-head">Cheap</h3>
            <h2 className="opt-par-p">Lowest prices on the Internet</h2>
          </a>
          <a className="options-parallelogram" href="../arcadix-auth/main.html">
            <i className="fa-solid fa-user-group" id="community"></i>
            <h3 className="opt-par-head">Community</h3>
            <h2 className="opt-par-p">The largest gaming community</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersAndOptions;
