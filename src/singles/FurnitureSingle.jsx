import React,{useState} from 'react'
import { furnitureData } from '../stores/data/furniture'
import { useParams } from 'react-router-dom'
import Navigation from '../stores/components/Navigation'
import { useCart } from '../stores/context/CartContext'

const FurnitureSingle = () => {
    const { id } = useParams()
    const {addToCart, cartItem} = useCart()
    const product = furnitureData.find(mobile => mobile.id === id)
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    //setTimeout(() => setAdded(false), 2000); // reset after 2s
    };

    if (!product) {
        return <div>Product not found.</div>
    }

    return (

        <>
            <Navigation />
            <div className='indexPage'>
                <div className="indexImg">
                    <img src={product.image} alt={product.model} />
                </div>
                <div className="indexDetails">
                    <div className="indexCompany">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="indexModel">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="indexPrice">
                        <h4>Price: ${product.price}</h4>
                    </div>
                    <div className="indexDesc">
                        <p>{product.description}</p>
                    </div>
                    <button className='indexBtn' onClick={handleAdd}>
                        {added ? 'Added to Cart ' : 'Add to Cart 🛒'}
                        </button>
                </div>
                

            </div>       
        
        </>

    )
}

export default FurnitureSingle
