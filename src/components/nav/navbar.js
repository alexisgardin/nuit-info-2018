import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import './bar.css'

const styles = {
    toolbar: {
        backgroundColor: '#fb9723',
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function TopAppBar(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={styles.toolbar}>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Insert logo
                    </Typography>
                    <Button>
                        <NavLink to="/">Dashboard</NavLink>
                    </Button>
                    <Button>
                        <NavLink to="/faq">FAQ</NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);