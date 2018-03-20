
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        })
    }

    componentWillUnmount() {
        console.log("CartItem will unmount");
    }

    //es next
    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;

        this.setState({
            qty: target.value
        })

    }
     
    render() {
        console.log("CartItem render", this.props.item.id);
        
        let {item} = this.props;

         
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                   <input value={this.state.qty} 
                          type="number"
                          onChange={this.onChangeText}
                          onBlur={ () => this.props.onUpdate(item.id, this.state.qty)  }
                   
                   />   
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                    <button onClick={() => this.props.onRemove(item.id)}>
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