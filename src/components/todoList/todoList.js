import React, { Component } from 'react';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Card from "@material-ui/core/Card/Card";
import Icon from '@material-ui/core/Icon';

import '../../assets/css/card.css';
import './todoList.css';

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
                    TODO
                </CardContent>
            </Card>
        );
    }
}

export default TodoList;
