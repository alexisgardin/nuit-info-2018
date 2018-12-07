import React, { Component } from 'react';
import {Card, Icon, CardContent, Typography} from '@material-ui/core';

import '../../assets/css/card.css'
import './weather.css'

class Weather extends Component {
    render() {
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
                    <img src={require("../../assets/img/clear_sky.svg")} width={100}/>
                </CardContent>
            </Card>
        );
    }
}

export default Weather;
