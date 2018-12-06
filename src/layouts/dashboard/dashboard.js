import React, { Component } from 'react';
import {Grid, Col, Row} from "react-bootstrap";

import Weather from "../../components/weather/weather";
import "./dashboard.css"

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Grid className='dashboardGrid'>
                    <Row>
                        <Col xs={12} md={6}>
                            <Weather/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
