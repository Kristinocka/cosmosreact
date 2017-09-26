/**
 * Created by user on 2017-09-26.
 */
import React, {Component} from "react";
import './CartContainer.css';
const CartContainer = props => (
    <div className="cartContainer">
        /*     state - rzeczy które się zmieniają
             props - stałe rzeczy*/

        {props.children}
    </div>
);

export default CartContainer;