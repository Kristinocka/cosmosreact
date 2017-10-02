import React, {PropTypes} from 'react';
import CartSingleItem from './CartSingleItem';

const Cart = ({items, total}) => {


    return (
        <div>
            <div className="cart-container entry">
                Koszyk
            </div>
            <div className= "cart-container cf " id="cartContainer">
                <div className="cart-container content">
                    {items.map(item => (
                        <div key={item.id}>
                            <CartSingleItem {...item} />
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="alert alert-info">Cart is empty</div>
                    )}
                </div>
            </div>
            <div className="cart-container summary">
                Total:{total} zł
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Cart;