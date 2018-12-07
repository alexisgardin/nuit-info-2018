import React, { Component } from 'react';
import Weather from "../../components/weather/weather";
import "./dashboard.css"
import TodoList from "../../components/todoList/todoList";
import Grid from "@material-ui/core/Grid/Grid";

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Grid container spacing={24}>
                    <Grid item  xs={6}>
                            <Weather/>
                    </Grid>
                    <Grid item  xs={6}>
                        <TodoList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
