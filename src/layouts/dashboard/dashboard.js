import React, {Component} from 'react';
import Weather from "../../components/weather/weather";
import "./dashboard.css"
import TodoList from "../../components/todoList/todoList";
import Grid from "@material-ui/core/Grid/Grid";
import MapCard from "../../components/mapCard/mapCard";
import PropTypes from "prop-types";
import Joyride from "react-joyride";
import Button from "@material-ui/core/es/Button/Button";
import {ACTIONS, EVENTS} from "react-joyride/es/constants";

class Dashboard extends Component {
    state = {
        continuous: true,
        loading: false,
        run: false,
        steps: [
            {
                content: "Bienvenue sur notre application, découvrez l'ensemble de ces fonctionalités.",
                textAlign: "center",
                target: ".hero_content",
                placement: "bottom",
                title: "Bienvenue!"
            },
            {
                content: "Cette carte vous permet de visualiser la météo de la semaine à l'endroit où vous vous trouvez.",
                textAlign: "center",
                target: ".weather",
                placement: "bottom",
                title: "Voici la météo !"
            },
            {
                content: "Vous trouverez ici vos tâches concernant la santé, et également le matériel",
                textAlign: "center",
                target: ".todolist",
                placement: "bottom",
                title: "La liste des tâches !"
            },
            {
                content: "Vous êtes désorienté? Ce plan vous permettra de retrouver votre chemin facilement.",
                textAlign: "center",
                target: ".map",
                placement: "bottom",
                title: "Le plan !"
            }
        ],
        stepIndex: 0
    };

    static propTypes = {
        joyride: PropTypes.shape({
            callback: PropTypes.func
        })
    };

    static defaultProps = {
        joyride: {}
    };

    handleClickStart = e => {
        e.preventDefault();
        console.log("in start");

        this.setState({
            run: true,
            stepIndex: 0
        });
    };

    handleClickNextButton = () => {
        const {stepIndex} = this.state;

        if (this.state.stepIndex === 2) {
            this.setState({
                stepIndex: stepIndex + 1
            });
        }
    };

    handleJoyrideCallback = data => {
        const {joyride} = this.props;
        const {action, index, type} = data;

        //if (status === STATUS.RUNNING) {
        if (type === EVENTS.TOUR_END && this.state.run) {
            // Need to set our running state to false, so we can restart if we click start again.
            this.setState({run: false});
        } else if (type === EVENTS.STEP_AFTER) {
            // Update state to advance the tour
            this.setState({stepIndex: index + (action === ACTIONS.PREV ? -1 : 1)});
        } else if (type === EVENTS.TOOLTIP_CLOSE) {
            this.setState({stepIndex: index + 1});
        }
        //}

        if (typeof joyride.callback === "function") {
            joyride.callback(data);
        } else {
            console.group(type);
            console.log(data); //eslint-disable-line no-console
            console.groupEnd();
        }
    };

    render() {
        const {loading, ...joyrideProps} = this.state;
        const props = {
            ...joyrideProps,
            ...this.props.joyride
        };

        return (
            <div className='demo-wrapper'>
                <Joyride
                    scrollToFirstStep
                    showProgress
                    showSkipButton
                    {...props}
                    callback={this.handleJoyrideCallback}
                />

                <div className="hero_content">
                    <Button className="hero__start" onClick={this.handleClickStart}>
                        Commencer le tutoriel !
                    </Button>
                </div>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <div className="weather" onClick={this.handleClickNext}>
                            <Weather/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="todolist" onClick={this.handleClickNext}>
                            <TodoList/>
                        </div>
                    </Grid>
                    <Grid item  xs={4}>
                        <div className="map">
                            <MapCard/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
