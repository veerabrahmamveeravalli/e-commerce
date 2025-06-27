import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {

    const firstFiveKitchens = kitchenData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>

        <h2>Kitchen Appliances</h2>
    </div>
      
      {
        <div className='productSection'>
          {
            firstFiveKitchens.map((kitchen) => (
              <div className='imgBox' key={kitchen.id}>
                <img className='proImg' src={kitchen.image} alt={kitchen.name} />
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Kitchen
