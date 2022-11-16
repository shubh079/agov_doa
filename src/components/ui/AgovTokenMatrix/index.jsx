import React from "react";
import "../AgovTokenMatrix/agovTokenMatrix.scss";
import chart from "../../../assets/images/chart.svg";
import radial2 from "../../../assets/images/radial2.png";
import radial1 from "../../../assets/images/radial1.png";
import chart_mob from "../../../assets/images/chart_mob.svg";
const AgovTokenMatrix = () => {
  return (
    <div className="tokenmatrix_wrp">
      <div className="container">
        <div className="img1">
          <div className="radial1">
            <picture>
              <source media="(min-width: 768px)" srcset={radial1} />
              <img src={""} style={{ width: "auto", height: "13rem" }} alt="" />
            </picture>
          </div>
          <div className="radial2">
            <img src={radial2} alt="icon" />
          </div>
        </div>
        <div className="row g-0">
          <div className="token_matrix">
            <h1>AGOV TOKEN MATRIX</h1>
          </div>
          <div className="liquidity">
            <h5 className="">LIQUIDITY MINING TOKEN</h5>
          </div>
          <div className="sale">
            <h6 className="">Didn't proceed with ICO or private sale</h6>
          </div>

          <div className="chart">
            <picture>
              <source media="(max-width:649px)" srcset={chart_mob} />
              <img
                src={chart}
                alt="img"
                style={{ width: "auto", height: "16rem" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgovTokenMatrix;
