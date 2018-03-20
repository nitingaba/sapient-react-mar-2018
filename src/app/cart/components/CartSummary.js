
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


//PureComponent extends React.Component
//PureComponent implements shouldComponentUpdate method\

export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }

    // called when parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log("Summary will receive props");
        console.log("Next Props", nextProps);
        console.log("Current props ", this.props);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("summary should update");

    //     return this.props.count != nextProps.count ||
    //            this.props.amount != nextProps.amount;
    //     //return true;  // calls render method
    //     //return false; // won't call render method
    // }
     
    render() {
        console.log("CartSummary render");

        let {
            count,
            amount
        } = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}