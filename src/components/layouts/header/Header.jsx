import React from "react";
import "../header/Header.scss";
import logo from "../../../assets/images/logo.png";
import metamask from "../../../assets/images/metamask.png";
import twitter_header from "../../../assets/images/twitter_header.png";
import discord_header from "../../../assets/images/discord_header.png";
const Header = () => {
  return (
    <div className="header-wrapper ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand link_agov_logo" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top img_agov "
            />
            <span className="text_agov"> AGOV DAO</span>
          </a>

          <div className="meta">
            <img
              src={metamask}
              alt="meta_icon"
              width="50px"
              height="auto"
              className="navbar-toggler navbar-dark"
            />

            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Toggle right offcanvas
            </button> */}
          </div>

          <div
            className="collapse navbar-collapse side_content nav_margin"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  AGOV-ETH
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  AGOV-DAO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CLUBRARE
                </a>
              </li>
              <li className="nav-item">
                <button className="metamask_connect_btn">
                  <img src={metamask} alt="icon" />
                  <span>ADD TO METAMASK</span>
                </button>
              </li>

              <div className="added_btn">
                <li className="nav-item">
                  <button className="twit_connect_btn">
                    <img src={twitter_header} alt="icon" />
                    <span>Follow Us</span>
                  </button>
                </li>

                <li className="nav-item">
                  <button className="dis_connect_btn">
                    <img src={discord_header} alt="icon" />
                    <span>Join Us</span>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <a className="navbar-brand link_agov_logo" href="#">
            <span className="text_agov"> AGOV DAO</span>
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top img_agov"
            />
          </a>

          <img src={metamask} className="metamask_mobile" alt="icon" />

          <button
            type="button"
            className="border-0 bg-transparent reset_btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                AGOV-ETH
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AGOV-DAO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CLUBRARE
              </a>
            </li>
            <li className="nav-item meta_button">
              <button className="metamask_connect_btn">
                <img src={metamask} alt="icon" />
                <span>ADD TO METAMASK</span>
              </button>
            </li>

            <div className="added_btn">
              <li className="nav-item">
                <button className="twit_connect_btn">
                  <img src={twitter_header} alt="icon" />
                  <span>Follow Us</span>
                </button>
              </li>

              <li className="nav-item">
                <button className="dis_connect_btn">
                  <img src={discord_header} alt="icon" />
                  <span>Join Us</span>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
