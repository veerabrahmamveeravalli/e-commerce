import React from 'react'
import {acData} from '../data/ac'

const Ac = () => {
    const firstFiveAcs = acData.slice(0, 5); 
  return (
    <div>
    <div className='proTitle'>

        <h2>AC's</h2>
    </div>
    
    <hr></hr>
        <div className='productSection'>
        {
            firstFiveAcs.map((ac) =>   (
                <div className="imgBox" key={ac.id}>
                    <img className="proImg" src={ac.image} alt={ac.name} />
                </div>    
            ))}
            
            

        </div>
      
    </div>
  )
}

export default Ac


