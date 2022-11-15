import React from "react";
import "../PartnerSection/partnerSection.scss";
import grp1 from "../../../assets/images/grp1.png";
import grp2 from "../../../assets/images/grp2.png";
import grp3 from "../../../assets/images/grp3.png";
import grp4 from "../../../assets/images/grp4.png";

import grp5 from "../../../assets/images/grp5.png";
import grp6 from "../../../assets/images/grp6.png";
import grp7 from "../../../assets/images/grp7.png";
import grp8 from "../../../assets/images/grp8.png";

const PartnerSection = () => {
  return (
    <div className="partnersection_wrp">
      <div className="container">
        <div className="row g-0">
          <div className="partner">
            <h1 className="partner_heading">PARTNERS</h1>
            <div className="partner_grp row g-0">
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp1} alt="icon" />
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp2} alt="icon" />
              </div>

              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp3} alt="icon" />
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp4} alt="icon" />
              </div>
            </div>
          </div>

          <div className="press">
            <h1 className="press_heading">PRESS</h1>
            <div className="press_img row g-0">
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp5} alt="icon" />
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp6} alt="icon" />
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp7} alt="icon" />
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center my-4">
                <img src={grp8} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
