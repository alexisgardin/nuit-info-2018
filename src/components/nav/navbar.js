import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import './bar.css'
import logo from '../../assets/img/desert.png';

const styles = {
    toolbar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign: 'left',
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
            <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar style={styles.toolbar}>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <NavLink to="/"><img  src={logo} style={{ width: '65px', margin: '7px', paddingLeft: '25px', paddingTop: '5px'}} alt="logo"/></NavLink>
                    </Typography>
                    <Button>
                        <NavLink to="/home">Dashboard</NavLink>
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
