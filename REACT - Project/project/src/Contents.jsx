import React from "react";
import './Main.css';


const Contents = () => {
  return (
    <div className="contents">
      <div className="contents-part">
        <img src="../images/twitch.png" alt="Twitch" id="twitch" />
        <div className="contents-cont">
          <div className="contents-head">Twitch Streaming</div>
          <div className="contents-p">New streams every day from our best players.</div>
        </div>
      </div>

      <div className="contents-part2">
        <img src="../images/controller.png" alt="Controller" id="controller" />
        <div className="contents-cont">
          <div className="contents-head">eSports News</div>
          <div className="contents-p">Get top streams and results from World Cyber Games.</div>
        </div>
      </div>

      <div className="contents-part">
        <img src="../images/community.png" alt="Controller" id="controller" />
        <div className="contents-cont">
          <div className="contents-head">Social Media</div>
          <div className="contents-p">New content daily from our top players! Join the action and stay engaged!</div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
