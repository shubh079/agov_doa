import React from "react";
import "./roadMap.scss";
import roadmap_bg from "../../../assets/images/roadmap_bg.svg";
import RoadmapCardSection from "../RoadmapCardSection";
import circle_roadmap from "../../../assets/images/circle_roadmap.png";

const data1 = ["Liquidity Mining"],
  data2 = ["First DEX Listing"],
  data3 = ["Introducing ClubRare Governance"],
  data4 = ["AGOV Token Economy Update"],
  data5 = [
    "- DeFi Launch",
    "- Official Discord Community Launch",
    "- Grant Program Launch",
    "- New Partnerships' Announcements",
  ],
  data6 = [
    "- NFT Marketplace Launch",
    " - AGOV Website Update",
    "- Platinum Sponsorship of NFT.NYC 2022",
    "- Web3 Collector Afterparty in NY",
    "- AGOV Audit Report",
    "- AGOV New Partnerships’ Announcements",
  ],
  data7 = [
    "- AGOV DAO launch",
    "- AGOV Uniswap Onboarding",
    "- 1st, 2nd, 3rd AGOV-ETH Liquidity Supply from AGOV DAO- AGOV Payment Support on ClubRare Marketplace",
  ],
  data8 = [
    "-AGOV DAO Treasury Wallet Disclosure and NFTs Deposit",
    "- AGOV-ETH Pair LP Staking Program Launch",
    "- Uniswap LP Competition Event",
    "- Global Marketing Expansion",
    "- Network Bridge Service Launch",
  ];

const Roadmap = () => {
  return (
    <div className="roadmap_wrp">
      <div className="roadmap_container container">
        <div className="roadmap_heading">
          <h1>ROADMAP</h1>
        </div>
        <div className="subheading">
          <p>
            ARV project has a long-term and permanent infrastructure designed to
            be integrated into the real world.Ariva Team are very happy that
            they adhered strictly to roadmap and completed the tasks ahead of
            schedule.There is always more to do, more to build.
          </p>
        </div>
     

      <div className="roadmap_line_image">
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2021 1Q"}
          data={data1}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2021 2Q"}
          data={data2}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2021 3Q"}
          data={data3}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2021 4Q"}
          data={data4}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2022 1Q"}
          data={data5}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2022 2Q"}
          data={data6}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2022 3Q"}
          data={data7}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"2022 4Q"}
          data={data8}
        />
      </div>
      </div>
    </div>
  );
};

export default Roadmap;
