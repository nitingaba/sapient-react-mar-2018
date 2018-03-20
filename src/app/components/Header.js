import React, {Component} from 'react';

//React.Component == Component

export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log("Header props ", props);
    }

    render() {
        //props is a keyword
        //let title = this.props.appTitle;
        // deconstruct
        let {appTitle} = this.props;

        return (
            <div>
                <h2>{appTitle}</h2>
                <hr />
            </div>
        )
    }
}