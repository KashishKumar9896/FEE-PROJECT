import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2025-01-25T00:00:00');
  
  // Initialize state for each time unit
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time difference
  const updateCountdown = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update state with the new time values
    setTimeLeft({ days, hours, minutes, seconds });
  };

  // useEffect to start the countdown on mount
  useEffect(() => {
    const timer = setInterval(updateCountdown, 1000);

    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="body-countdown" id="countdown">
      <div className="body-count-main">
        <div className="body-count-title">
          GHOST
          OF YOTEI
        </div>
        
        <div className="countdown-timer">
          <div>
            <div className="smalltext">DAYS</div>
            <div className="days">{timeLeft.days}</div>
          </div>
          <div>
            <div className="smalltext">HRS</div>
            <div className="hours">{timeLeft.hours}</div>
          </div>
          <div>
            <div className="smalltext">MIN</div>
            <div className="minutes">{timeLeft.minutes}</div>
          </div>
          <div>
            <div className="smalltext">SEC</div>
            <div className="seconds">{timeLeft.seconds}</div>
          </div>
        </div>

        <a className="button4 parallelogram" id="see" href="../arcadix-master/index.html">
          <span className="skew-fix">See More</span>
        </a>
      </div>
    </div>
  );
};

export default Countdown;
