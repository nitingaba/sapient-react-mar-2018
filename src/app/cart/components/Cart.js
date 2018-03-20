
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ {id: 1, name: 'Product 1', price: 100, qty: 1}],
            
            // derived data from items
            amount: 0,
            count: 0,

            flag: true
        }
    }

    addItem() {
        let id = Math.ceil(Math.random() * 100000)
        let item = {
            id, // syntatic sugar id: id
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO
    }

    removeItem(id) {

        //TODO
    }

    updateItem(id, qty) {

        //TODO
    }

    empty() {

        //TODO
    }

    //dummy
    refresh() {
        this.setState({
            flag: this.state.flag
        })
    }
    
    
    render() {
        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={ ()=> this.addItem()}>
              Add
            </button>

            <button onClick={ ()=> this.empty()}>
              Empty
            </button>

            <button onClick={ ()=> this.refresh()}>
              Refresh
            </button>

            <CartList items={this.state.items} />

            <CartSummary amount={this.state.amount} 
                         count={this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}