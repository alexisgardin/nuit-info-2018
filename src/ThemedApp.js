import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import App from './App';
import * as Colors from 'material-ui/colors';

import {connect} from "react-redux";

class ThemedApp extends Component {

    themeProps = this.props.theme;

    theme = createMuiTheme({
        palette: {
            type: this.themeProps, // Switching the dark mode on is a single property value change.
            pickerHeaderColor: Colors.deepOrange,
            alternateTextColor: Colors.red,
            primary1Color: Colors.deepOrange,
            primary2Color: Colors.deepOrange,
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
