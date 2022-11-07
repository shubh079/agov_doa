import React from 'react';
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
    <div className='partnersection_wrp'>
      <div className='container'>
        <div className='row'>
      <div className='partner'>
        <span className='partner_heading'>PARTNERS</span>
        <div className='partner_grp'>
          <img src= {grp1} alt="icon" />
          <img src= {grp2} alt = "icon"/>
          <img src= {grp3} alt = "icon"/>
          <img src= {grp4} alt = "icon"/>
        </div> 
        </div>
       
        <div className='press'>
          <span className='press_heading'>PRESS</span>
          <div className='press_img'>
            <img src={grp5} alt='icon'/>
            <img src={grp6} alt='icon'/>
            <img src={grp7} alt='icon'/>
            <img src={grp8} alt='icon'/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerSection;