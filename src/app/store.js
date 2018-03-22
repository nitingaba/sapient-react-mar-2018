import {createStore, combineReducers, applyMiddleware} from 'redux';

import cartReducer from "./redux-cart/state/cartReducer";
import productReducer from "./product/state/productReducer";

import loggerMiddleware from "./loggerMiddleware";

//reducers are called by store
const INITIAL_STATE = 0;
function counterReducer(state = INITIAL_STATE,
                        action) {
    console.log("counterReducer prevState", state, action);

    switch(action.type) {
        case 'INCREMENT': 
            return state + action.payload.value;

        case 'DECREMENT': 
            return state - action.payload.value;
            
        default: 
            return state;
    }
}

// by default, store calls the reducer first time
// initialize default state
//let store = createStore(counterReducer, 1000);

let rootReducer = combineReducers({
    // stateName: reducerFn
    counter: counterReducer,
    items: cartReducer,

    product: productReducer
})

let store = createStore(rootReducer, 
                        applyMiddleware(loggerMiddleware));

export default store;

//Experimental code


store.subscribe ( ()=> {
    console.log("SUBSCRIBE CALLBACK");
});
 


// by component
let action = {
    type: 'INCREMENT',
    payload: {
        value: 10
    }
}

console.log("STATE ", store.getState());

console.log("DISPATCH 10");
// calls reducer internally
store.dispatch(action);

console.log("STATE ", store.getState());

console.log("DISPATCH -2");
let decrementAction = {
    type: 'DECREMENT',
    payload: {
        value: 2
    }
}
store.dispatch(decrementAction);
console.log("STATE ", store.getState());
