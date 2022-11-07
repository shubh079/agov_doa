import React from 'react';
import HeroSection from '../../components/ui/HeroSection';
import AgovUtility from '../../components/ui/AgovUtility';
import AgovTokenMatrix from '../../components/ui/AgovTokenMatrix';
import BuyToken from '../../components/ui/BuyTokens';
import PartnerSection from '../../components/ui/PartnerSection';


const HomeContainer = () => {
  return (
    <div className='home_container_wrp'>
      <HeroSection/>
      <AgovUtility/>
      <AgovTokenMatrix/>
      <BuyToken/>
      <PartnerSection/>
    </div>
  )
}

export default HomeContainer;