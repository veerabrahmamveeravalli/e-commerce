import React,{useState} from 'react'
import { booksData } from '../data/books'

import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom'

const Books = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct,company]);

        }

    }
    const filteredProduct =selectedProduct.length===0?
        booksData : booksData.filter((selected)=>selectedProduct.includes(selected.author))
     
  return (

    <>
    <Navigation />
    <div className="fullPage">
        <div styleName="selected">

            {booksData.map((phone) => {
                return (
                    <div key={phone.id}>
                        <label>
                            <input type='checkbox'
                            checked={selectedProduct.includes(phone.author)}
                            onChange={()=>companyHandler(phone.author)}/>
                            {phone.author}
                        </label>
                    </div>
                );
            })}
        </div>
        <div className='pageSection'>
            {
                filteredProduct.map((item) => {
                    return (
                        <Link to={`/books/${item.id}`} className='link' key={item.id}>
                            <div className='pageImg' key={item.id}>
                                <img src={item.image} alt={item.model} />
                                <h3>{item.company} {item.model}</h3>
                                <p>Price: ${item.price}</p>
                                
                            </div>

                        </Link>

                    )
                })
            }
        
        </div>


    </div>

    </>

  )
}

export default Books
