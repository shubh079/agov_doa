import React from "react";
import "../header/Header.scss";
import logo from "../../../assets/images/logo.png";
import metamask from "../../../assets/images/metamask.png";
const Header = () => {
  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
