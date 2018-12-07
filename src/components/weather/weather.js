import React, { Component } from 'react';
import {Card, Icon, CardContent, Typography} from '@material-ui/core';
import axios from 'axios'

import '../../assets/css/card.css'
import './weather.css'
import WeatherForecastMin from "../weatherForecastMin/weatherForecastMin";
import {connect} from "react-redux";

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '6391da4ec59ed91947c42757ba9792a5';

class Weather extends Component {

    state={
        weatherData: null,
        weatherForecast: null
    }

    componentWillReceiveProps(nextProps, nextContext){
        if(nextProps.coords) {
            let params = {
                lat: nextProps.coords.latitude,
                lon: nextProps.coords.longitude,
                appid: API_KEY,
                units: "metric",
                lang: "fr"
            };
            axios.get(`${API_URL}weather`, {params: params})
                .then(response => {
                    this.setState({weatherData: response.data});
                    axios.get(`${API_URL}forecast`, {params: params})
                        .then(forecastResponse => {
                            this.setState({weatherForecast: this.extractFiveDays(forecastResponse.data)});
                        });
                });
        }
    }

    render() {
        const weatherData = this.state.weatherData;
        const weatherForecast = this.state.weatherForecast;
        return (
            <Card className='card'>
                <div className='cardHeader'>
                    <div className='cardIcon cardIconWeather'>
                        <Icon>wb_sunny</Icon>
                    </div>
                    <Typography className='cardTitle'>
                        Météo
                    </Typography>
                </div>
                <CardContent>
                    {weatherData ?
                        <div className="weatherMainInfos">
                            <img src={this.getWeatherImage(weatherData.weather[0].icon)} width={100}/>
                            <Typography variant="h5" className="weatherLocation">{weatherData.name}</Typography>
                            <Typography variant="h2" className="weatherTemp">{weatherData.main.temp}<span className="weatherTempUnit">°C</span></Typography>
                        </div>
                        : null
                    }
                    {weatherForecast ?
                        weatherForecast.map(forecast => {
                            return (
                                <WeatherForecastMin forecast={forecast} getWeatherImage={this.getWeatherImage}/>
                            );
                        })
                        : null
                    }
                </CardContent>
            </Card>
        );
    }

    getWeatherImage(iconId) {
        let iconName;

        switch(iconId){
            case '01d':
                iconName = 'clear_sky';
                break;
            case '01n':
                iconName = 'clear_sky_night';
                break;
            case '02d':
                iconName = 'few_clouds';
                break;
            case '02n':
                iconName = 'few_clouds_night';
                break;
            case '03d':
                iconName = 'scattered_clouds';
                break;
            case '03n':
                iconName = 'scattered_clouds';
                break;
            case '04d':
                iconName = 'broken_clouds';
                break;
            case '04n':
                iconName = 'broken_clouds';
                break;
            case '09d':
                iconName = 'shower_rain';
                break;
            case '09n':
                iconName = 'shower_rain';
                break;
            case '10d':
                iconName = 'rain';
                break;
            case '10n':
                iconName = 'rain_night';
                break;
            case '11d':
                iconName = 'thunderstorm';
                break;
            case '11n':
                iconName = 'thunderstorm';
                break;
            case '13d':
                iconName = 'snow';
                break;
            case '13n':
                iconName = 'snow';
                break;
            case '50d':
                iconName = 'mist';
                break;
            case '50n':
                iconName = 'mist';
                break;
        }

        return require(`../../assets/img/${iconName}.svg`);
    }

    extractFiveDays(response) {
        let weatherList = response['list'];

        let today = new Date();

        let result = new Array();

        for(let i = 1; i < 6; i++){
            let dayDate = new Date();
            dayDate.setDate(today.getDate() + i);
            let month = (dayDate.getMonth()+1 < 10) ? `0${dayDate.getMonth()+1}` : dayDate.getMonth()+1;
            let date = (dayDate.getDate() < 10) ? `0${dayDate.getDate()}` : dayDate.getDate();

            weatherList.forEach(day => {
                if(day.dt_txt === `${dayDate.getFullYear()}-${month}-${date} 12:00:00`)
                    result.push(day);
            });
        }

        return result || [];
    }
}

const mapStateToProps = state => ({
   coords: state.themeReducer.coord
});

export default connect(mapStateToProps)(Weather);
