import React from 'react';
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

class ChatBot extends React.Component {

  state = {
	show: false
  };

  toggle = () => {
	this.setState({
	  show: !this.state.show
	});
  };

  render() {
	return (
		<div style={{position: 'absolute', zIndex: 999, left: '70%', top: '20%'}}>
		  <div style={{
		    display: this.state.show === true ? 'block' : 'none'
		  }}>
			<iframe
				allow="microphone;"
				width="350"
				height="500"
				src="https://console.dialogflow.com/api-client/demo/embedded/5c04fcaf-a65b-469c-8ea5-5f452ca928c4">
			</iframe>
		  </div>
		  <Fab onClick={this.toggle} style={{position: 'fixed', left: '93%', top: '83%'}} color="secondary"
			   aria-label="Edit" className="fab">
			<Icon>help_icon</Icon>
		  </Fab>
		</div>
	);
  }
}

export default ChatBot;
