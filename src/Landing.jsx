import React from "react";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-nav">
        <div className="nav-logo">TOPICKS</div>
        <ul className="nav-links">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">DONATE</a>
          </li>
          <li>
            <a className="twitch-btn" href="">
              Connect with Twitch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
