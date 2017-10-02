/**
 * Created by user on 2017-09-26.
 */
import React, {Component, PropTypes} from 'react';
import './Product.css';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
    render(){
        const { name, price, photo, url, isInCart, id } = this.props;
        return(
            <div>
                <div className="product-item thumbnail" data-id={id}>
                    <img src={photo} alt="product"/>
                </div>
                <div className="product-item info">
                    <p className="product-item info info-title">{name}</p>
                    <div className="product-item info-buy">
                        <p className="product-item info-buy price">{price}</p>
                        <a className="product-item info-buy btn btn-addToCard"  onClick={this.handleClick}>

                            {isInCart ? 'X' : 'Add'}

                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Product;