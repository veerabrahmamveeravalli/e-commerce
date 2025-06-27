import React,{useState} from 'react'
import { fridgeData } from '../data/fridge'

import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom'


const Fridge = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct,company]);

        }

    }
    const filteredProduct =selectedProduct.length===0?
        fridgeData : fridgeData.filter((selected)=>selectedProduct.includes(selected.brand))

  return (

    <>
    <Navigation />
    <div className="fullPage">
        <div styleName="selected">

            {fridgeData.map((phone) => {
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
                        <Link to={`/fridge/${item.id}`} className='link' key={item.id}>
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

export default Fridge
