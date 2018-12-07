import React, {Component} from 'react';
import Faq from './components/faq/faq';
import NavBar from './components/nav/navbar';
import Footer from './components/footer/footer';
import Joyride from 'react-joyride';
import Dashboard from "./layouts/dashboard/dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {geolocated} from 'react-geolocated';

import './App.css';
import {setCoord} from "./redux/actions/themeActions";
import {connect} from "react-redux";

class App extends Component {
    state = {
        run: false,
        steps: [
            {
                target: '.my-first-step',
                content: 'This if my awesome feature!',
                placement: 'bottom',
            },
            {
                target: '.my-other-step',
                content: 'This if my awesome feature!',
                placement: 'bottom',
            },
        ]
    };

    componentDidMount() {
        this.setState({run: true});
    }

    callback = (data) => {
        const {action, index, type} = data;
    };

    componentDidUpdate(){
        this.props.setCoords(this.props.coords);
    }

    render() {
        const {steps, run} = this.state;
        return (
            !this.props.isGeolocationAvailable ?
                <div>Your browser does not support Geolocation</div>
                : !this.props.isGeolocationEnabled ?
                    <div>Geolocation is not enabled</div>
                    : this.props.coords ?
                        <BrowserRouter>
                            <div className="App">
                                <NavBar/>
                                <Joyride
                                    steps={steps}
                                    run={run}
                                    callback={this.callback}
                                />
                                <Switch>
                                    <Route exact path="/faq" component={Faq}/>
                                    <Route exact path="/" component={Dashboard}/>
                                </Switch>
                                <Footer/>
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