import React, { Component } from 'react';
import {Card, Icon, CardContent, Typography} from '@material-ui/core';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

import '../../assets/css/card.css';
import './mapCard.css';
import connect from "react-redux/es/connect/connect";

class MapCard extends Component {

    render() {
        return (
            <Card className='card'>
                <div className='cardHeader'>
                    <div className='cardIcon cardIconMap'>
                        <Icon>map</Icon>
                    </div>
                    <Typography className='cardTitle'>
                        Position et Carte
                    </Typography>
                </div>
                <CardContent>
                    {
                        this.props.coords ?
                        <Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={12} width={370}
                             height={370}>
                            <Marker anchor={[this.props.coords.latitude, this.props.coords.longitude]} payload={1} onClick={({event, anchor, payload}) => {}}/>
                        </Map>
                        : null
                    }
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.themeReducer.coord
});

export default connect(mapStateToProps)(MapCard);
