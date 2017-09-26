/**
 * Created by user on 2017-09-26.
 */
import React, {Component} from 'react';
import 'ProductItem.css';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';

class ProductItem extends Component {
    render(){
        return(
            <div className="productContainer">
                <ProductThumbnail />
            </div>
        )
    }
}
export default ProductItem;