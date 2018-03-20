import React from "react";

// returns virtual dom
// functional component
// presentational component
// stateless component
export default function Footer(props) {
    console.log("Footer render called");
    
    //Error, read only, immutable
    //props.year = 2020;

    return (
        <div>
            <hr />
            <p>Copyrights @{props.appTitle}, {props.year}</p>
        </div>
    )
}