import React,{useState} from 'react'
import { womanData } from '../data/woman'

import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom'

const Women = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (brand) => {
        if (selectedProduct.includes(brand)) {
            setSelectedProduct(selectedProduct.filter(item => item !== brand));
        } else {
            setSelectedProduct([...selectedProduct,brand]);

        }

    }
    const filteredProduct =selectedProduct.length===0?
        womanData : womanData.filter((selected)=>selectedProduct.includes(selected.brand))
 
  return (

    <>
    <Navigation />
    <div className="fullPage">
        <div styleName ="selected">

            {womanData.map((phone) => {
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
                        <Link to={`/women/${item.id}`} className='link' key={item.id}>
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

export default Women
