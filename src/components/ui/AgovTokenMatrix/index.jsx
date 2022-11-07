import React from 'react';
import "../AgovTokenMatrix/agovTokenMatrix.scss";
import chart from "../../../assets/images/chart.svg";
import radial2 from "../../../assets/images/radial2.png";
import radial1 from "../../../assets/images/radial1.png";
const AgovTokenMatrix = () => {
  return (
    <div className='tokenmatrix_wrp'>
        <div className='container'>
        <div className='img1'>
                <div className='radial1'>
                    <img src={radial1} style ={{width:"auto", height:"13rem"}} alt='icon'/>
                </div>
                <div className='radial2'>
                    <img src={radial2} alt='icon'/>
                </div>
                </div>
            <div className='row'>
             
                <div className='token_matrix'>
                    <span>AGOV TOKEN MATRIX</span>
                </div>
                <div className='liquidity'>
                    <span className=''>LIQUIDITY MINING TOKEN</span>
                </div>
                <div className='sale'>
                    <span className=''>Didn't proceed with ICO or private sale</span>
                </div>

                <div className='chart'>
                    <img src={chart} alt='img' style={{width: "auto", height:"16rem"}}/>
                    
                </div>    

            </div>

        </div>
        
    </div>
  )
}

export default AgovTokenMatrix;