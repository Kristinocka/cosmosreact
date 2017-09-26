/**
 * Created by user on 2017-09-26.
 */
import * as types from './types';
import productList from '../products/productsList';

export const getProducts =  dispatch => dispatch({
    type : types.LOAD_PRODUCTS,
    data : productList
});