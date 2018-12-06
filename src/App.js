import React, {Component} from 'react';
import Faq from './components/faq/faq';
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
                <Joyride
                    steps={steps}
                    run={run}
                    callback={this.callback}
                />
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Faq/>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
