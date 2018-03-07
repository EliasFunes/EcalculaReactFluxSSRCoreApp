import React from 'react';
import ReactDom from 'react-dom';
const render = ReactDom.render;
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';

render((
    <Router>
        <App pokemon={window.__PRELOADED_STATE__}/>
    </Router>),
    document.getElementById('root')
)
