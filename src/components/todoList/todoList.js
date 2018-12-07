import React, { Component } from 'react';
import {Card, Icon, CardContent, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Checkbox} from '@material-ui/core';

import '../../assets/css/card.css';
import './todoList.css';
import TodoPanel from "../todoPanel/todoPanel";

class TodoList extends Component {
    render() {
        return (
            <Card className='card'>
                <div className='cardHeader'>
                    <div className='cardIcon cardIconTodo'>
                        <Icon>event_available</Icon>
                    </div>
                    <div className='cardTitle'>
                        Tâches
                    </div>
                </div>
                <CardContent>
                    <TodoPanel
                        name="Santé"
                        icon="favorite"
                        tasks={[{label: "Test1"}, {label: "Test2"}]}
                        color="#cd5c5c44"/>
                    <TodoPanel
                        name="Matériel"
                        icon="memory"
                        color="#228b2244"/>
                </CardContent>
            </Card>
        );
    }
}

export default TodoList;
