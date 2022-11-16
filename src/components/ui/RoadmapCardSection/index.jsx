import React from "react";
import circle_roadmap from "../../../assets/images/circle_roadmap.png";

const RoadmapCardSection = ({ heading, data, className }) => {
  return (
    <>
      {/* <img style={{width: "20px", height: "20px"}} src={circle_roadmap} className="img_roadmap" alt="img" />   */}

      <div className={`card ${className}`}>
        <img src={circle_roadmap} className="img_roadmap_mobile" alt="img" />
        <div className="container">
          <div
            className="card"
            style={{ background: "transparent", border: "none" }}
          >
            <h4>{heading}</h4>
            <ul class="list-group list-group-flush" style={{ width: "100%" }}>
              {data.map((item, index) => {
                return (
                  <li
                    style={{ width: "100%" }}
                    key={new Date().getTime() + index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapCardSection;
