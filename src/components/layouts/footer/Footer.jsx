import React from "react";
import "./Footer.scss";
import twitter from "../../../assets/images/twitter.svg";
import discord from "../../../assets/images/discord.png";
import dis1 from "../../../assets/images/dis1.png";
import twit1 from "../../../assets/images/twit1.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* <div className='social_media'> */}
          <div className="col-lg-6 col-12 twitter">
            <div className="image">

              <picture>
                <source media="(max-width:768px)" srcSet={twit1} />
                <source media="(min-width:769px)" srcSet={twitter}  />
                <img src={twitter} alt="icon" />
              </picture>

            </div>
            <div className="text">
              <span className="text_finance">twitter.com/agov_finance</span>
              <div className="btn_follow">
                <button className="followus">FOLLOW US</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 discord">
            <div className="text">
              <span className="text_clubrare">discord.gg/clubrare</span>
              <div className="btn_join">
                <button className="joinus">JOIN US</button>
              </div>
            </div>
            <div className="image">
            <picture>
                <source media="(max-width:768px)" srcSet={dis1} />
                <source media="(min-width:769px)" srcSet={discord}  />
                <img src={dis1} alt="icon" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='social_media'>
          <div className='col-md-6 twitter'>
           <img src= {twitter} className= "twit" alt='icon' />
           <span className='text_finance'>twitter.com/agov_finance</span>
           <button className='followus'>FOLLOW US</button>
           
          </div>
          <div className='col-md-6 discord'>
           <img src={discord} className="dis" alt='icon' />
           <span className='text_clubrare'>discord.gg/clubrare</span>
           <div className='btn_join'>
           <button className='joinus'>JOIN US</button>
           </div>
          </div>
        </div> */}

      <div className="copyright">
        <span className="text_copyright">2022 © Agov.finance</span>
      </div>
    </div>
  );
};

export default Footer;
