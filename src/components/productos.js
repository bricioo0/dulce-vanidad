
import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;