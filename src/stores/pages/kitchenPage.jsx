import React,{useState} from 'react'
import { kitchenData } from '../data/kitchen'

import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom'

const Kitchen = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct,company]);

        }

    }
    const filteredProduct =selectedProduct.length===0?
        kitchenData : kitchenData.filter((selected)=>selectedProduct.includes(selected.brand))

  return (

    <>
    <Navigation />
    <div className="fullPage">
        <div styleName="selected">

            {kitchenData.map((phone) => {
                return (
                    <div key={phone.id}>
                        <label>
                            <input type='checkbox'
                            checked={selectedProduct.includes(phone.brand)}
                            onChange={()=>companyHandler(phone.brand)}/>
                            {phone.brand}
                        </label>
                    </div>
                );
            })}
        </div>
        <div className='pageSection'>
            {
                filteredProduct.map((item) => {
                    return (
                        <Link to={`/kitchen/${item.id}`} className='link' key={item.id}>
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
    <div className='pageSection'>
        {
            kitchenData.map((item) => {
                return (
                    <div className='pageImg' key={item.id}>
                        <img src={item.image} alt={item.model} />
                        <h3>{item.company} {item.model}</h3>
                        <p>Price: ${item.price}</p>
                        
                    </div>
                )
            })
        }
      
    </div>
    </>

  )
}

export default Kitchen
