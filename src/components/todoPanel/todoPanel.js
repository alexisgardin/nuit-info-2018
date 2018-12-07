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
                                this.props.tasks.map(task => {
                                    return(
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={false}
                                                    onChange={() => {
                                                        console.log('click')
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