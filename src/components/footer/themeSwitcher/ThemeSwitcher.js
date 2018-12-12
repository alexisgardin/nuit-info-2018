import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import {setTheme, themes} from "../../../redux/actions/themeActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class ThemeSwitcher extends Component {

  handleChange = event => {
	this.props.setTheme(event.target.checked);
  };

  render() {
	return (
		<FormControlLabel
			style={{
			  label: 'red'
			}}
			control={
			  <Switch
				  value={this.props.theme === themes.DARK}
				  color="default"
				  onChange={this.handleChange}
			  />
			}
			label={'Mode ' + (this.props.theme === themes.DARK ? 'nuit' : 'jour')}
		/>
	);
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

const mapDispatchToProps = dispatch => ({
  setTheme: (dark) => dispatch(setTheme(dark === true ? themes.DARK : themes.LIGHT))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
