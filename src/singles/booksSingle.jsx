import React,{useState,useEffect} from 'react'
import { booksData } from '../stores/data/books'
import { useParams } from 'react-router-dom'
import Navigation from '../stores/components/Navigation'
import { useCart } from '../stores/context/CartContext'

const BooksSingle = () => {
    const { id } = useParams()
    const {addToCart, cartItem} = useCart()
    const product = booksData.find(mobile => mobile.id === id)
    const [localIsInCart, setLocalIsInCart] = useState(false);
    const isInCart = cartItem?.some(
       item => item.id === product?.id && item.type === product?.type);

    useEffect(() => {
        if (cartItem?.some(item => item.id === product?.id)) {
        setLocalIsInCart(true);
        } else {
        setLocalIsInCart(false);
        }
    }, [cartItem, product]);
    const handleAdd = () => {
        if (!localIsInCart) {
        addToCart({...product,type:'book'});
        setLocalIsInCart(true); // immediately update UI
        }
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

                    <button
                        className='indexBtn'
                        onClick={handleAdd}
                        
                    >
                        {localIsInCart ? 'Added to Cart ' : 'Add to Cart 🛒'}
                    </button>
                </div>
                

            </div>       
        
        </>

    )
}

export default BooksSingle
