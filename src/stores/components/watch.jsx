import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    const firstFiveWatches = watchData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>

        <h2>Watches</h2>
    </div>
      
      <div className='productSection'>
        {
            firstFiveWatches.map((watch) => (
                <div className='imgBox' key={watch.id}>
                    <img className='proImg' src={watch.image} alt={watch.name} />
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Watch
