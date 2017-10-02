/**
 * Created by user on 2017-09-26.
 */
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { getItems, getTotal } from '../actions/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Cart);