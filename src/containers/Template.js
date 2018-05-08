import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui';
import logo from '../eggbacon.svg';
import '../index.css';

class Template extends Component {

	render() {
		return(
			<div>
		  <div className="head">
        <header className="App-header">
        	<center>
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">What do we owe Nicole?</h1>
          </center>
        </header>
      </div>
      <main>
      	{this.props.children}
      </main>
      </div>
      )
	}
}

export default Template;