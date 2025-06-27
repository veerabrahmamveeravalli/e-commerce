import React from 'react'
import {menData} from '../data/Men'

const Men = () => {
    const firstFiveMen = menData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>
        <h2>Men's</h2>
        
    </div>
      
      {
        <div className='productSection'>
          {
            firstFiveMen.map((item) => (
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

export default Men
