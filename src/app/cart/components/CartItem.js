
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        console.log("CartItem render", this.props.item.id);
        
        let {item} = this.props;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    {item.qty}    
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                    <button>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}