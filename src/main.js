// bootstrap react app into real dom

// diff, patching
import {render} from 'react-dom';
import React from 'react';


import Routes from "./app/Routes";

// render (virtual dom, real dom)

render(<Routes />,
    document.getElementById('root'));
