/**
 * Created by user on 2017-10-02.
 */
import React, {Component, PropTypes} from 'react';
import './ProductList.css';
import Product from '../../Containers/Product';


const ProductList = ({ products }) => {
    return (
        <div className="main-content">
                {products.map(product => (
                    <div key={product.id} className="product-item single">
                        <Product {...product} />
                    </div>
                ))}


        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}
export default ProductList;