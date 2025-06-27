import React from 'react'
import {fridgeData} from '../data/fridge'
const Fridge = () => {
    const firstFiveFridges = fridgeData.slice(0,5);
  return (
    
    <div>
    <div className='proTitle'>

        <h2>Fridge</h2>
    </div>
      
      <div className='productSection'>
        {
            firstFiveFridges.map((fridge) => (
                <div className='imgBox' key={fridge.id}>
                    <img className='proImg' src={fridge.image} alt={fridge.product} />
                </div>
            ))
        }
      </div>
    </div>
    
  )
}

export default Fridge
