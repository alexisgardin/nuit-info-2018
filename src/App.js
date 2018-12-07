import React, {Component} from 'react';
import Faq from './components/faq/faq';
import NavBar from './components/nav/navbar';
import Footer from './components/footer/footer';
import Joyride from 'react-joyride';
import Dashboard from "./layouts/dashboard/dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

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

    render() {
        const {steps, run} = this.state;

        return (
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
        );
    }
}

export default App;
