import React from 'react';

const News = () => {
  return (
    <div className="news">
      <h1 className="news-head">Latest News</h1>

      <div className="news-content">
        <div className="news-img">
          <img src="../images/fortnite.jpg" alt="" className="news-img-img" />
        </div>
        <div className="news-section">
          <div className="news-section-head">
            <div className="news-section-heading">
              <h1 className="news-h1">Fortnite OG Returns!</h1>
              <h3 className="news-h3">
                Fortnite: Battle Royale, Free-to-Play, and First-Time Struggles

              </h3>
            </div>
            <h3 className="news-h3">21st March 2015 by nK</h3>
          </div>
          <p className="news-p">
            🔥 It's official! Fortnite OG is here, bringing back the nostalgia with classic maps, original skins, and the iconic vibes that started it all. Dive in now and experience Fortnite like it was on day one – the ultimate throwback awaits! 🎮🌌 #FortniteOG
          </p>
          <button className="button3 parallelogram">See More</button>
        </div>
      </div>

      <div className="news-content" id="news">
        <div className="news-img">
          <img src="../images/silent.jpg" alt="" className="news-img-img" />
        </div>
        <div className="news-section">
          <div className="news-section-head">
            <div className="news-section-heading">
              <h1 className="news-h1">Silent Hill 2 Hits 100 Million Copies Sold!</h1>
              <h3 className="news-h3">
                Silent Hill 2: Horror, Mystery, and First-Time Chills</h3>
            </div>
            <h3 className="news-h3">21st March 2015 by nK</h3>
          </div>
          <p className="news-p">
            🎉 The legend continues! Silent Hill 2 has officially crossed the 100 million copies milestone, cementing its place as one of the most iconic horror game franchises of all time. Get ready for chills and thrills as we celebrate this massive achievement! 🕹️👻 #SilentHill #100Million
          </p>
          <button className="button3 parallelogram">See More</button>
        </div>
      </div>

      <div className="news-content">
        <div className="news-img">
          <img src="../images/assasin.jpg" alt="" className="news-img-img" />
        </div>
        <div className="news-section">
          <div className="news-section-head">
            <div className="news-section-heading">
              <h1 className="news-h1">Assassin's Creed Shadow: Coming Soon!</h1>
              <h3 className="news-h3">
                Assassin's Creed Shadows: Stealth, Adventure, and First-Time Thrills</h3>
            </div>
            <h3 className="news-h3">21st March 2015 by nK</h3>
          </div>
          <p className="news-p">
            ⚔️ The hype is real! Assassin's Creed Shadow is almost here, promising a thrilling new adventure filled with mystery and stealth. Gear up, assassins – this journey will be legendary! 🖤 #AssassinsCreedShadow #ComingSoon
          </p>
          <button className="button3 parallelogram">See More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
