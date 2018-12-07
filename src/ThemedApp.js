import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import App from './App';

import {connect} from "react-redux";

class ThemedApp extends Component {

  themeProps = this.props.theme;

  theme = createMuiTheme({
	palette: {
	  type: this.themeProps // Switching the dark mode on is a single property value change.
	},
	typography: {
	  useNextVariants: true
	},
  });

  render() {
	return (
		<MuiThemeProvider theme={this.theme}>
		  <App/>
		</MuiThemeProvider>
	);
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(ThemedApp);
