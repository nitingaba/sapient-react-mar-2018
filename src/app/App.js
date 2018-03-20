import React from "react";

//default export
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Cart from "./cart/components/Cart";

export class App extends React.Component {
    constructor() {
        super();
        console.log("App comp created");
    }

    // creates and returns virtual dom
    // immutable
    render() {
        console.log("App render");
        // JSX
        return (
            <div>
                <h1>React App 2</h1>
                <Header appTitle="React App" />

                <Cart />
                
                <Home />

                <Footer appTitle="React App" 
                        year="2018" />
            </div>
        )
    }
}

