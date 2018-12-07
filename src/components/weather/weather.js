import React, { Component } from 'react';
import {Card, Icon, CardContent, Typography} from '@material-ui/core';
import axios from 'axios'

import '../../assets/css/card.css'
import './weather.css'

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '8bc778bbac5322ebf2cc2ee51724786f';

class Weather extends Component {

    state={
        weatherData: null
    }

    componentWillMount(){
        let params = {
            lat: "43.640830",
            lon: "7.008490",
            appid: API_KEY,
            units: "metric",
            lang: "fr"
        };
        axios.get(`${API_URL}weather`, {params: params})
            .then(response => {
                this.setState({weatherData: response.data});
            });
    }

    render() {
        const weatherData = this.state.weatherData;
        console.log(weatherData)
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
                        <div>
                            <img src={this.getWeatherImage(weatherData.weather[0].icon)} width={100}/>
                            <Typography variant="h5" className="weatherLocation">{weatherData.name}</Typography>
                            <Typography variant="h2" className="weatherTemp">{weatherData.main.temp}<span className="weatherTempUnit">°C</span></Typography>
                        </div>
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
}

export default Weather;
