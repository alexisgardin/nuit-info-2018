import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Card from "@material-ui/core/Card/Card";
import Icon from '@material-ui/core/Icon';

import './weather.css'

class Weather extends Component {
    render() {
        return (
            <Card className='card'>
                <div className='cardHeader'>
                    <Icon>wb_sunny</Icon>
                </div>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        Weather
                    </Typography>
                    <img src={require("../../assets/img/clear_sky.svg")} width={100}/>
                </CardContent>
            </Card>
        );
    }
}

export default Weather;
