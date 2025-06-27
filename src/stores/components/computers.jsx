import React from 'react'
import {computerData} from '../data/computers' 

const Computers = () => {
    const firstFiveComputers = computerData.slice(0, 5); 
  return (

    <>
    <div className='proTitle'>

       <h2>Computers</h2> 
    </div>
    
    
        <div className='productSection'>
        {
            firstFiveComputers.map((mobile) =>   (
                <div className="imgBox" key={mobile.id}>
                    <img className="proImg" src={mobile.image} alt={mobile.name} />
                </div>    
            ))}
            
            

        </div>
    
    </>


  )
}

export default Computers
