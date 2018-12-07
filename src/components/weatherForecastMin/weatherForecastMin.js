import React, {Component} from 'react';
import {Typography, Grid, Divider} from '@material-ui/core';

import './weatherForecastMin.css';

class WeatherForecastMin extends Component {
    render() {
        return (
            <div>
                <Divider variant="middle" />
                <Grid container className="weatherForecast" justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">{this.getWeekDay(this.props.forecast.dt)}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={this.props.getWeatherImage(this.props.forecast.weather[0].icon)} width={40}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">{this.props.forecast.main.temp}°C</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }

    getWeekDay(timestamp) {
        let date = new Date(timestamp*1000);

        switch(date.getDay()){
            case 0:
                return 'Dimanche';
            case 1:
                return 'Lundi';
            case 2:
                return 'Mardi';
            case 3:
                return 'Mercredi';
            case 4:
                return 'Jeudi';
            case 5:
                return 'Vendredi';
            case 6:
                return 'Samedi';
        }
    }
}

export default WeatherForecastMin;