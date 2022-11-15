import React from "react";
import "../BuyTokens/buyToken.scss";
import uniswap from "../../../assets/images/uniswap.svg";
import etherson from "../../../assets/images/etherson.svg";
import tyre from "../../../assets/images/tyre.png";
import football from "../../../assets/images/Group 1.png";
const BuyToken = () => {
  return (
    <div className="buytoken_wrp">
      {/* <div className='tyre'>
               <img src= {tyre} alt = "icon"/>

            </div> */}
      <div className="container">
        <div className="row g-0">
          <div className="heading_tok">
            <div className="buy_tok">
              <h1>Why should I buy tokens here and now?</h1>
            </div>
            <div className="sub_heading">
              <h6>
                Fair Start • Fair Development • Shared Profit and Governance •
                Sustainable Economy
              </h6>
            </div>
            <div className="paragraph">
              <p>
                AGOV is a ClubRare governance token, the future of commerce.
                Through AGOV, the community is empowered to vote to determine
                ClubRare's major policies and brand partnerships and can trade
                exclusive Phygital NFTs at ClubRare. AGOV stands for “Answer
                Governance”. For ClubRare, there was never any other answer.
              </p>
            </div>
          </div>

          <button className="btn_buynow">
            <span className="btn_agov">BUY AGOV</span>
          </button>

          <div className="glassmorphism">
            <div className="row g-0">
              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column gap_mobile">
                <img src={uniswap} alt="image" />
                <button className="uniswap_btn">
                  <span className="text_uniswap_btn">
                    AGOV-ETH UNISWAP PAIR
                  </span>
                </button>
              </div>

              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column gap_mobile">
                <img src={etherson} alt="image" />
                <button className="etherson_btn">
                  <span className="text_scan_btn">Scan</span>
                </button>
              </div>
            </div>
            <div className="football_img">
              <img
                src={football}
                style={{ position: "absolute", top: "-29rem", left: "66rem" }}
                alt="icon"
              />
            </div>
          </div>

          <div className="supply">
            <div className="project">
              <span className="total_supply">Projected Total Supply:</span>
              <span className="total_num">1,000,000,000</span>
            </div>

            <div className="circular">
              <span className="circulating_supply">Circulating Supply:</span>
              <span className="tot_num">927,105,720</span>
            </div>
          </div>

          <div className="governance_heading">
            <h3>
              AGOV DAO is at the core of the web3 economy. As the governance
              token for{" "}
              <div>
                ClubRare Universe, AGOV allows holders to steer the future of
                ClubRare universe.
              </div>
            </h3>
          </div>

          <div className="governance_para">
            <p>
              By working with creators and collectors to innovate in the
              collector economy, everyone is rewarded. AGOV DAO will be the
              accelerator for Phygital NFT Creators. ClubRare is building the
              future of the collector-oriented economy with the Phygital NFT and
              AGOV DAO members will utilize treasury governance to allocate
              funds to new creators and kickstart their productivity in ClubRare
              Universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;
