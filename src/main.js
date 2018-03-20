// bootstrap react app into real dom

// diff, patching
import {render} from 'react-dom';
import React from 'react';

import {App} from './app/App';

// render (virtual dom, real dom)

render(<App />,
    document.getElementById('root'));
