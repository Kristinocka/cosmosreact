/**
 * Created by user on 2017-10-02.
 */
import React, { PropTypes } from 'react';
import './Cart.css'

const CartSingleItem = ({ name, price, photo}) => {
    return (
            <div className="cart-product-item single cf">
                <div className="cart-product-item thumbnail">
                    <img src={photo}/>
                </div>
                <div className="cart-product-item info">
                    <p className="cart-product-item info-title">{name}</p>
                    <div className="cart-product-item info-buy">
                        <p className="cart-product-item info-buy price">{price} zł</p>
                    </div>
                </div>
            </div>
    );
}

CartSingleItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
}

export default CartSingleItem;