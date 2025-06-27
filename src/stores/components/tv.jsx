import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const firstFiveTv = tvData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>
        <h2>Televisions</h2>
        
    </div>
      
      <div className='productSection'>
        {
            firstFiveTv.map((tv) => (
                <div className='imgBox' key={tv.id}>
                    <img className='proImg' src={tv.image} alt={tv.name} />
                </div>
            ))
        }
      </div>
    </div>  
  )
}

export default Tv
