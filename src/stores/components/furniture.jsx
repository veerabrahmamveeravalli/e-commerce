import React from 'react'
import {furnitureData} from '../data/furniture'

const Furniture = () => {
    const firstFiveFurniture = furnitureData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>
        <h2>Furniture</h2>
        
    </div>
      
      {
        <div className='productSection'>
          {
            firstFiveFurniture.map((item) => (
              <div className='imgBox' key={item.id}>
                <img className='proImg' src={item.image} alt={item.name} />
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Furniture
