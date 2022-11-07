import React from 'react';
import "../BuyTokens/buyToken.scss";
import uniswap from "../../../assets/images/uniswap.svg";
import etherson from "../../../assets/images/etherson.svg";
const BuyToken = () => {
  return (
    <div className='buytoken_wrp'>
       <div className='container'>
        <div className='row'>
            <div className='heading_tok'>
            <div className='buy_tok'>
              <span>Why should I buy tokens here and now?</span>
            </div>
            <div className='sub_heading'>
                <span>Fair Start • Fair Development • Shared Profit and Governance • Sustainable Economy</span>

            </div>
            <div className='paragraph'>
                <span>AGOV is a ClubRare governance token, the future of commerce. Through AGOV, the community is empowered to vote to determine ClubRare's major policies and brand partnerships and can trade exclusive Phygital NFTs at ClubRare. AGOV stands for “Answer Governance”. For ClubRare, there was never any other answer.</span>

            </div>
            </div>
            
            <button className='btn_buynow'>
                <span className='btn_agov'>BUY AGOV</span>
            </button>

            <div className='glassmorphism'>
                <div className='row'>
                    <div className='col-md-6'>
                      <img src={uniswap} alt='image'/>
                      <button className='uniswap_btn'>
                        <span>AGOV-ETH UNISWAP PAIR</span>
                    </button>
                    </div>
                   

                    <div className='col-md-6'>
                    <img src={etherson} alt='image'/>
                    <button className='etherson_btn'>
                          <span>Scan</span>
                      </button>
                    </div>
                    </div>
                    </div>

                    <div className='supply'>
                    <div>
                    <span className="total_supply">Projected Total Supply:</span>
                    <span className="total_num">1,000,000,000</span>
                   </div>
                 
                   
                   <div>
                    <span className="circulating_supply">Circulating Supply:</span>
                    <span className="tot_num">927,105,720</span>
                   </div>
                   
                   </div>
                 

                   <div className='governance_heading'>
                    <span>AGOV DAO is at the core of the web3 economy. As the governance token for ClubRare Universe, AGOV allows holders to steer the future of ClubRare universe.</span>
                   </div>

                   <div className='governance_para'>
                    <span>AGOV DAO is at the core of the web3 economy. As the governance token for ClubRare Universe, AGOV allows holders to steer the future of ClubRare universe.</span>
                   </div>
                      
               

          
        </div>
       </div>
    </div>
  )
}

export default BuyToken;