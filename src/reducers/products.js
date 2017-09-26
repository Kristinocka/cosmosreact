/**
 * Created by user on 2017-09-26.
 */
import * as types from '../actions/types';
const defaultState = [];


export default (state = defaultState, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return action.data;
        default:
            return state;
    }
}