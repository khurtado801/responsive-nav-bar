import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root')
);

