import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent/CardContent";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";

const styles = {
    root: {
        backgroundColor: '#161616',
        color: '#595957',
        flexGrow: 1,
        position: 'fixed',
        bottom: '0',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Footer(props) {
    const {classes} = props;

    return (
        <footer className={classes.root}>
            <Typography variant="h6" color="inherit" className={classes.grow} style={{fontFamily: 'Calibri Light'}}>
                Made by the Browny Factory team.
                <ThemeSwitcher/>
            </Typography>
        </footer>
    );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
