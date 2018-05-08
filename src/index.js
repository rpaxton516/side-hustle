import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import {Router, browserHistory} from 'react-router';
import Routes from './routes/index.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
//	<Board />, 
	<Router
		history={browserHistory}
		routes={Routes}
	/>,
	document.getElementById('root')
	);

registerServiceWorker();