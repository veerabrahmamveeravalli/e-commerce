import React, { useState, useEffect } from 'react';
import { computerData } from '../stores/data/computers';
import { useParams } from 'react-router-dom';
import Navigation from '../stores/components/Navigation';
import { useCart } from '../stores/context/CartContext';

const ComputerSingle = () => {
    const { id } = useParams();
    const { addToCart, cartItem } = useCart();

    const rawProduct = computerData.find(item => item.id === id);
    const product = rawProduct ? { ...rawProduct, type: 'computer' } : null;

    const [localIsInCart, setLocalIsInCart] = useState(false);

    useEffect(() => {
        if (cartItem?.some(item => item.id === product?.id && item.type === product?.type)) {
            setLocalIsInCart(true);
        } 
    }, [cartItem, product]);

    const handleAdd = () => {
        if (!localIsInCart && product) {
            addToCart(product);
            setLocalIsInCart(true);
        }
    };

    if (!product) {
        return <div>Product not found.</div>;
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
                        {localIsInCart ? 'Added to Cart' : 'Add to Cart 🛒'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ComputerSingle;
