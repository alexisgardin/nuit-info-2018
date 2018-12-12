import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import App from './App';
import * as Colors from '@material-ui/core/colors';

import {connect} from "react-redux";

class ThemedApp extends Component {

  render() {
	return (
		<MuiThemeProvider theme={
		  createMuiTheme({
			palette: {
			  type: this.props.theme, // Switching the dark mode on is a single property value change.
			  pickerHeaderColor: Colors.deepOrange,
			  alternateTextColor: Colors.red,
			  primary1Color: Colors.deepOrange,
			  primary2Color: Colors.deepOrange,
			},
			typography: {
			  useNextVariants: true
			},
		  })
		}>
		  <App/>
		</MuiThemeProvider>
	);
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(ThemedApp);
