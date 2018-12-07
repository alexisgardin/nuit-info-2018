import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import {setTheme, themes} from "../../../redux/actions/themeActions";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class ThemeSwitcher extends Component {

  handleChange = event => {
	this.props.setTheme(event.target.checked);
  };

  render() {
	return (
		<div>
		  <FormGroup row>
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
				label={'Theme ' + (this.props.theme === themes.DARK ? 'clair' : 'sombre')}
			/>
		  </FormGroup>
		</div>
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
