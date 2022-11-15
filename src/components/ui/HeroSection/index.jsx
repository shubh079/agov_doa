import React from "react";
import "../HeroSection/heroSection.scss";
import etherum from "../../../assets/images/etherum.png";


const HeroSection = () => {
  return (
    <div className="hero_Section_wrp">
   
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <span className="text_future_commerce">
              NEVER ANY OTHER ANSWER FOR THE FUTURE OF COMMERCE
            </span>
            </div>

            <div className="col-md-6">
            
            <div className="btn_etherum">
              <button className="btn_eth">
                <span style={{ color: "#ffff" }}>1 ETH = 9 466,7622 AGOV</span>
              </button>
              <button className="btn_agov">
                <span style={{ color: "#ffff" }}>1 AGOV = 0,0001 ETH</span>
              </button>
            </div>
            <img src={etherum} className="etherum_img" alt="img" />
          </div>
          </div>

            <div className="btn_commerce">
              <button className="metamask_connect_btn1">
                <span>JOIN AGOV DAO</span>
              </button>
              <button className="metamask_connect_btn2">
                <span>BUY AGOV ETH</span>
              </button>
            </div>

            <div className="token_value">
              <div className="token_num">
                <span className="num">$6.29</span>
                <p className="value">Token Value</p>
              </div>

              <div className="token_num">
                <span className="num">$61,0266,562</span>
                <p className="value">Market Cap</p>
              </div>

              <div className="token_num">
                <span className="num">$9,705,556</span>
                <p className="value">Circulating Supply</p>
              </div>

              <div className="token_num">
                <span className="num">$2063</span>
                <p className="value">Staked</p>
              </div>
           
          </div>

     
          <div className="line">
            <svg
              width="100%"
              height="1"
              viewBox="0 0 1358 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="1358"
                y2="0.5"
                stroke="url(#paint0_linear_34_164)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_34_164"
                  x1="1358"
                  y1="1.5"
                  x2="-3.58569e-06"
                  y2="1.49006"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D063EB" stop-opacity="0" />
                  <stop offset="0.5625" stop-color="#D063EB" />
                  <stop offset="1" stop-color="#EB63D9" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
  
  );
};

export default HeroSection;
