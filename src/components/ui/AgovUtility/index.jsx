import React from 'react';
import "../AgovUtility/agovUtility.scss";
const AgovUtility = () => {
  return (
    <div className='utility_wrp'>
        <div className='container'>
            <h1 className='text_utility'>AGOV UTILITY</h1>
            <div className='row g-0'>
              
                <div className='col-lg-4 col-12'>
                    <h1 className="heading">MAKE DECISIONS</h1>
                    <p className="txt">With AGOV, the community votes on treasury spending, determines policies and brand partnerships, and can trade exclusive NFTs.</p>
                </div>

                <div className='col-lg-4 col-12'>
                    <h1 className="heading">MAKE A DIFFERENCE</h1>
                    <p className="txt">ClubRare believes in an open metaverse governed by community. With AGOV, DAO members shape the future of web3.</p>
                </div>

                <div className='col-lg-4 col-12'>
                    <h1 className="heading">MAKE THE UNIVERSE</h1>
                    <p className="txt">Steered by the DAO, ClubRare is creating a community-led commerce ecosystem blending physical goods with experience-rich metaverse goods and NFTs: ClubRare Universe.</p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default AgovUtility;