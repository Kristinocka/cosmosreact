/**
 * Created by user on 2017-09-26.
 */
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import { getProducts } from '../actions/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);