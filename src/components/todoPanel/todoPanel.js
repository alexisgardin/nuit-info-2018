import React, {Component} from 'react';
import {
    Checkbox,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary, FormControlLabel,
    Icon,
    Typography,
    FormGroup
} from "@material-ui/core";

import './todoPanel.css';

class TodoPanel extends Component {
    render() {
        return (
            <ExpansionPanel style={{background: this.props.color}}>
                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Icon className="todoPanelIcon">{this.props.icon}</Icon>
                    <Typography variant="display1">{this.props.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormGroup>
                        {
                            this.props.tasks ?
                                this.props.tasks.map((task, index) => {
                                    return(
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={task.checked}
                                                    onChange={() => {
                                                        let tasks = this.props.tasks;
                                                        let newTask = task;
                                                        newTask.checked = !task.checked;
                                                        tasks[index] = newTask;
                                                        this.props.updateTasks(this.props.index, tasks);
                                                    }}
                                                    value="task.label"
                                                />
                                            }
                                            label={<Typography variant="headline">{task.label}</Typography>}/>
                                    );
                                })
                                : null
                        }
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default TodoPanel;