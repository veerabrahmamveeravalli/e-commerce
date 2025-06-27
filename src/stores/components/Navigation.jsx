import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
    <div className='naviBar'>
      <Link to='/home'>
      <div className='title'>
        <h2> E-mart </h2> 
      </div>
      </Link>

      <div className='search'>  
        <input type='text' placeholder='Search for products' />
        </div>  
      <div className='user'>
        <div className='userDetails'>
            SignIn/SignUp 
        </div>  

      </div>
      <Link to='/cart'>
        <div className='cart'>
             🛒
        </div>       
      </Link>
 


    </div>
    <div className='subMenu'>
      <ul>
        <Link to='/mobiles'>
          <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
          <li>Computers</li>
        </Link>
        <Link to='/ac'>
          <li>AC</li>
        </Link>
        <Link to='/fridge'>
          <li>Fridge</li>
        </Link>
        <Link to='/speaker'>
          <li>Speakers</li>
        </Link>
        <Link to='/tv'>
          <li>TV</li>   
        </Link>
        <Link to='/kitchen'>    
          <li>Kitchen</li>
        </Link>

        <Link to='/furniture'>    
          <li>Furniture</li>
        </Link>   
        <Link to='/books'>
          <li>Books</li>
        </Link>
        <Link to='/watch'>
        <li>Watches</li>
        </Link>
        <Link to='/men'>
            <li>Men</li>
        </Link>
        <Link to='/women'>  
          <li>Women </li>
        </Link>


        
      </ul>
    </div>

    
    
    </>
  )
}

export default Navigation
