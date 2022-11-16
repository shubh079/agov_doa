import React from "react";
import HeroSection from "../../components/ui/HeroSection";
import AgovUtility from "../../components/ui/AgovUtility";
import AgovTokenMatrix from "../../components/ui/AgovTokenMatrix";
import BuyToken from "../../components/ui/BuyTokens";
import PartnerSection from "../../components/ui/PartnerSection";
import OurClients from "../../components/ui/OurClients";
import Roadmap from "../../components/ui/Roadmap";
import Header from "../../../src/components/layouts/header/Header";
import "./homeContainer.scss";
import Footer from "../../../src/components/layouts/footer/Footer";
const HomeContainer = () => {
  return (
    <div className="home_container_wrp">
      <div className="bg_image">
        <Header />
        <HeroSection />
        <AgovUtility />
      </div>

      <AgovTokenMatrix />
      <BuyToken />
      <Roadmap />

      <div className="footer_img">
        <PartnerSection />
        <Footer />
      </div>
      {/* <OurClients/> */}
    </div>
  );
};

export default HomeContainer;
