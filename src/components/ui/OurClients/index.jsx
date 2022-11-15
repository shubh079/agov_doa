import React from 'react';
import { useState } from 'react';
import grp1 from '../../../assets/images/grp1.png'


const OurClients = () => {
    const [images, setImages] = useState([{ id: 1, img: grp1}])
  return (
    <div className='partnersection_wrp'>
        <span>PARTNERS</span>
        {images && images.map(({item, id}) => {
            console.log(grp1,item);
            return <img key={id} src={item?.img} alt="client"/> 
        })}
        
    </div>
  )
}

export default OurClients;