// src/pages/ProductsPage.js
import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            title: '',
            description: '',
            price: 29.99,
            imageUrl: '',
        },
        {
            id: 2,
            title: '',
            description: '',
            price: ,
            imageUrl: '',
        },
        // Agregar productos según sea necesario
    ];

    return (
        <div>
            <h1>Productos</h1>
            <ProductList products={products} />
        </div>
    );
};

export default ProductsPage;