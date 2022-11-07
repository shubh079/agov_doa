import React from 'react';
import "../AgovUtility/agovUtility.scss";
const AgovUtility = () => {
  return (
    <div className='utility_wrp'>
        <div className='container'>
            <span className='text_utility'>AGOV UTILITY</span>
            <div className='row'>
              
                <div className='col-md-4'>
                    <span className="heading">MAKE DECISIONS</span>
                    <span className="txt">With AGOV, the community votes on treasury spending, determines policies and brand partnerships, and can trade exclusive NFTs.</span>
                </div>

                <div className='col-md-4'>
                    <span className="heading">MAKE A DIFFERENCE</span>
                    <span className="txt">ClubRare believes in an open metaverse governed by community. With AGOV, DAO members shape the future of web3.</span>
                </div>

                <div className='col-md-4'>
                    <span className="heading">MAKE THE UNIVERSE</span>
                    <span className="txt">Steered by the DAO, ClubRare is creating a community-led commerce ecosystem blending physical goods with experience-rich metaverse goods and NFTs: ClubRare Universe.</span>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default AgovUtility;