import React, {Component} from 'react';
import Faq from './components/faq/faq';
import Dashboard from "./layouts/dashboard/dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {geolocated} from 'react-geolocated';
import {setCoord} from "./redux/actions/themeActions";
import {connect} from "react-redux";

import './App.css';
import login from "./layouts/login/login";

class App extends Component {

  componentDidUpdate() {
	this.props.setCoords(this.props.coords);
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
  setCoords: coords => dispatch(setCoord(coords))
});

export default connect(null, mapDispatchToProps)(geolocated({
  positionOptions: {
	enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App));
