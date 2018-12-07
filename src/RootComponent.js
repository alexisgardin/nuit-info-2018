import React, {Component} from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import ThemedApp from "./ThemedApp";

class RootComponent extends Component {

  render() {
	return (
		<Provider store={store}>
		  <ThemedApp/>
		</Provider>
	);
  }
}

export default RootComponent;
