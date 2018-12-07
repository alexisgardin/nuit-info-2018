import React, { Component } from 'react';
import {Card, Icon, CardContent, Typography} from '@material-ui/core';

import '../../assets/css/card.css';
import './todoList.css';
import TodoPanel from "../todoPanel/todoPanel";

class TodoList extends Component {

    state={
        tasks: [
            {
                typeName: "Santé",
                typeIcon: "favorite",
                tasks: [
                    {label: "Test1", checked: false},
                    {label: "Test2", checked: false}
                ],
                color: "#cd5c5c44"
            },
            {
                typeName: "Matériel",
                typeIcon: "memory",
                tasks: [
                    {label: "Test1", checked: false},
                    {label: "Test2", checked: false}
                ],
                color: "#228b2244"
            }
        ]
    }

    render() {
        return (
            <Card className='card'>
                <div className='cardHeader'>
                    <div className='cardIcon cardIconTodo'>
                        <Icon>event_available</Icon>
                    </div>
                    <Typography className='cardTitle'>
                        Tâches
                    </Typography>
                </div>
                <CardContent>
                    {
                        this.state.tasks.map((task, index) => {
                            return (
                                <TodoPanel
                                    key={index}
                                    index={index}
                                    name={task.typeName}
                                    icon={task.typeIcon}
                                    tasks={task.tasks}
                                    color={task.color}
                                    updateTasks={this.updateTasks.bind(this)}/>
                            );
                        })
                    }
                </CardContent>
            </Card>
        );
    }

    updateTasks(index, newTasks){
        let tasks = this.state.tasks;
        tasks[index].tasks = newTasks;
        this.setState({tasks: tasks});
    }
}

export default TodoList;
