import React from 'react'
import {mobileData} from '../data/proData'

const ProData = () => {
    const firstFiveMobiles = mobileData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>

        <h2>Mobile</h2>
    </div>
      <h2>Mobile</h2>
      {
        <div className='productSection'>
          {
            firstFiveMobiles.map((mobile) => (
              <div className='imgBox' key={mobile.id}>
                <img className='proImg' src={mobile.image} alt={mobile.name} />
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default ProData
