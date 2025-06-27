import React from 'react'
import {speakerData} from '../data/speaker'

const Speaker = () => {
    const firstFiveSpeakers = speakerData.slice(0, 5);
  return (
    <div>
    <div className='proTitle'>

        <h2>Speakers</h2>
    </div>
      
      <div className='productSection'>
        {
            firstFiveSpeakers.map((speaker) => (
                <div className='imgBox' key={speaker.id}>
                    <img className='proImg' src={speaker.image} alt={speaker.name} />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Speaker
