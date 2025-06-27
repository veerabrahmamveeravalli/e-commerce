import React from 'react'
import {womanData} from '../data/woman'

const Women = () => {
    const firstFiveWomen = womanData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>
        <h2>Women</h2>
        
    </div>
      
      {
        <div className='productSection'>
          {
            firstFiveWomen.map((item) => (
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

export default Women
