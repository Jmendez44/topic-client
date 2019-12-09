import React from "react";
import { Example } from "./Example";

export const Landing = () => {
  return (
    <>
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
              <img
                src={require("./assets/twitch-purple-logo-black-and-white.png")}
                alt=""
              />
              Connect with Twitch
            </a>
          </li>
        </ul>
      </div>
      <div className="landing-container">
        <div className="decription">
          <h1>
            Enhance the podcast experience <br /> other stuff here
          </h1>
          <div className="btns">
            <button className="twitch">
              
              <img
                src={require("./assets/twitch-purple-logo-black-and-white.png")}
                alt=""
              />
              twitch
            </button>
            <button>google</button>
          </div>
        </div>
        <Example />
        {/* <div className="footer"></div> */}
      </div>
    </>
  );
};
