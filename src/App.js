import React, {Component} from 'react';
import Faq from './components/faq/faq';
import Dashboard from "./layouts/dashboard/dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {geolocated} from 'react-geolocated';
import {setCoord, setTheme, themes} from "./redux/actions/themeActions";
import {connect} from "react-redux";
import axios from "axios";

import './App.css';
import login from "./layouts/login/login";

class App extends Component {

    state={
        automaticDone: false
    }

    componentWillReceiveProps(nextProps, nextContext) {
        nextProps.setCoords(nextProps.coords);
        if (!this.state.automaticDone && nextProps.coords) {
            axios.get(`https://api.sunrise-sunset.org/json?lat=${nextProps.coords.latitude}&lng=${nextProps.coords.longitude}&date=today&formatted=0`)
                .then(response => {
                    let sunrise = new Date(response.data.results.sunrise);
                    let sunset = new Date(response.data.results.sunset);
                    let now = new Date();

                    if (now < sunrise || now > sunset) {
                        this.props.setTheme(themes.DARK);
                        this.setState({automaticDone: true});
                    } else {
                        this.props.setTheme(themes.LIGHT);
                        this.setState({automaticDone: true});
                    }
                });
        }
    }

  render() {

        return (
            !this.props.isGeolocationAvailable ?
                <div>Your browser does not support Geolocation</div>
                : !this.props.isGeolocationEnabled ?
                <div>Geolocation is not enabled</div>
                : this.props.coords ?
                    <BrowserRouter>
                        <div className="App">
                            <Switch>
                                <Route exact path="/" component={login}/>
                                <Route exact path="/faq" component={Faq}/>
                                <Route exact path="/home" component={Dashboard}/>
                            </Switch>

                        </div>
                    </BrowserRouter>
                    : null
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCoords: coords => dispatch(setCoord(coords)),
    setTheme: theme => dispatch(setTheme(theme))
});

export default connect(null, mapDispatchToProps)(geolocated({
  positionOptions: {
	enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App));
