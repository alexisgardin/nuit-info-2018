import React, {Component} from 'react';
import Faq from './components/faq/faq';
import NavBar from './components/nav/navbar';
import Footer from './components/footer/footer';
import Joyride from 'react-joyride';
import './App.css';
import Dashboard from "./layouts/dashboard/dashboard";

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
            <div className="App">
                <NavBar />
                <Joyride
                    steps={steps}
                    run={run}
                    callback={this.callback}
                />
                <Faq/>
                <Dashboard/>
                <Footer />
            </div>
        );
    }
}

export default App;
