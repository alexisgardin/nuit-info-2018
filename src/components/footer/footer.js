import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";
import {connect} from "react-redux";
import {themes} from "../../redux/actions/themeActions";

const styles = theme => {
  return ({
	root: {
	  backgroundColor: theme.palette.type === themes.DARK ? '#161616' : '#DDD',
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
  });
};

function Footer(props) {

  const {classes} = props;

  return (
	  <footer className={classes.root}>
		<Typography variant="h6" color="inherit" className={classes.grow}
					style={{
					  display: 'inline-block',
					  fontFamily: 'Calibri Light'
					}}>
		  Made by the Browny Factory team.
		</Typography>

		<div style={{display: 'inline-block', marginLeft: 450, marginRight: 450}}/>

		<ThemeSwitcher/>
	  </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapState = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapState)(withStyles(styles)(Footer));
