import React, { useEffect, useState } from 'react';
import './Main.css';


function Main() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      const main = document.querySelector('.main');
      const mainHeight = main.offsetHeight;

      if (window.scrollY > mainHeight) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active menu item
  useEffect(() => {
    const menuItems = document.querySelectorAll('.navbar ul li');
    let hasActiveClass = false;

    menuItems.forEach(item => {
      if (item.classList.contains('active')) {
        hasActiveClass = true;
      }
    });

    if (!hasActiveClass) {
      document.getElementById('Home').classList.add('active');
    }

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }, []);

  // Toggle sidebar visibility
  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <img src='../images/logo.png.png' alt="Logo" />
        </div>
        <div className="navbar">
          <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`} style={{ display: sidebarVisible ? 'flex' : 'none' }}>
            <li onClick={hideSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li id="Home">Home</li>
            <li><a href="#about1">About</a></li>
            <li><a href="#discounts">Deals</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/newlogin/index.html">Login</a></li>
            <li><a href="/arcadix-auth/main.html">Social</a></li>
            <li><a href="/arcadix-master/index.html"><span className="material-symbols-outlined">shopping_cart</span></a></li>
          </ul>
          <ul>
            <li id="Home" className="hideOnMobile active">
              <a href="#">Home</a>
            </li>
            <li className="hideOnMobile">
              <a href="#about1">About</a>
            </li>
            <li className="hideOnMobile">
              <a href="#discounts">Deals</a>
            </li>
            <li className="hideOnMobile">
              <a href="#news">News</a>
            </li>
            <li className="hideOnMobile">
              <a href="#contact">Contact</a>
            </li>
            <li className="hideOnMobile">
              <a href="../newlogin/index.html">Login</a>
            </li>
            <li className="hideOnMobile">
              <a href="../arcadix-auth/main.html">Social</a>
            </li>
            <li className="hideOnMobile">
              <a href="../arcadix-master/index.html">
                <span className="material-symbols-outlined">shopping_cart</span>
              </a>
            </li>
            <li className="menu-button" onClick={showSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-cont">
          <div className="main-head">Games with idea &</div>
          <div className="main-head" id="head">
            memorable<br />design
          </div>
          <a className="main-btn" href="../arcadix-master/index.html">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
