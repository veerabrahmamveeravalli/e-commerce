import React from 'react'
import {MobileData} from '../data/mobiles.js'

const Mobiles = () => {

    const firstFiveMobiles = MobileData.slice(0, 5); // Get the first five mobile items
  return (

    <>
    <div className='proTitle'>

        <h2>Mobiles</h2>
    </div>
    
    
        <div className='productSection'>
        {
            firstFiveMobiles.map((mobile) =>   (
                <div className="imgBox" key={mobile.id}>
                    <img className="proImg" src={mobile.image} alt={mobile.name} />
                </div>    
            ))}
            
            

        </div>    
    </>

  )
}

export default Mobiles
