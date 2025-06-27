import React from 'react'
import {booksData} from '../data/books'

const Books = () => {
    const firstFiveBooks = booksData.slice(0,5);
  return (
    <div>
    <div className='proTitle'>
        <h2>Books</h2>
        
    </div>
      
      <div className='productSection'>
        {
            firstFiveBooks.map((book)=>(
                <div className='imgBox' key={book.id}>
                    <img className='proImg' src={book.image} alt={book.title} />
                </div>    
            ))
        }
      </div>
    </div>
  )
}

export default Books
