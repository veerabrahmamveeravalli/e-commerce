import React,{useState} from 'react'
import { acData } from '../data/ac'

import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom'



const Ac = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct,company]);

        }

    }
    const filteredProduct =selectedProduct.length===0?
        acData : acData.filter((selected)=>selectedProduct.includes(selected.company))
  return (

    <>
    <Navigation />
    <div className="fullPage">
        <div styleName="selected">

            {acData.map((phone) => {
                return (
                    <div key={phone.id}>
                        <label>
                            <input type='checkbox'
                            checked={selectedProduct.includes(phone.company)}
                            onChange={()=>companyHandler(phone.company)}/>
                            {phone.company}
                        </label>
                    </div>
                );
            })}
        </div>
        <div className='pageSection'>
            {
                filteredProduct.map((item) => {
                    return (
                        <Link to={`/ac/${item.id}`} className='link' key={item.id}>
                            <div className='pageImg' key={item.id}>
                                <img className='proImgs' src={item.image} alt={item.model} />
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

export default Ac
