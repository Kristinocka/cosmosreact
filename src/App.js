import React, {Component} from "react";
import {connect} from 'react-redux';
import ProductList from './Containers/ProductListContainer'
import CartContainer from './Containers/CartContainer'

const App = () => {
    return (
        <div className="">
            <CartContainer />
            <ProductList />


            <footer>

            </footer>
        </div>
    );
}

export default App;