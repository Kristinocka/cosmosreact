import React, {Component} from "react";
import CartContainer from "./components/Containers/CartContainer";
import {connect} from 'react-redux';
import {getProducts} from "./actions/products";

class App extends Component {
    componentWillMount() {
        this.props.load;
    }

    render() {
        return (
            <CartContainer>
                {
                    this.props.productList.map(item => (<div><h1>{item.id || ""}</h1><img src={item.photo || ""}/></div>)
                    )

                }
            </CartContainer>
        )
    }
}

const mapStateToProps = state => {
    return ({
        productList: state.products
    })
};

const mapDispatchToProps = dispatch => ({
    load: getProducts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);