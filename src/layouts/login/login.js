import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

import './login.css'

class Login extends React.Component {

  render() {

	return (
		<Card className="card loginCard">
		  <CardContent>
			<Typography className="title" color="textSecondary" style={{fontFamily: 'Calibri Light'}} gutterBottom>
			  Accès sécurisé à ExplorationBoard
			</Typography>

              <div id="info" style={{display: "none"}}>
              </div>
              <div id="loading">
                  Loading the model...
              </div>
              <div id='main' style={{display: "none"}}>
                  <video id="video" playsInline style={{transform: "scaleX(-1)", display: "none"}}>
                  </video>
                  <canvas id="output"/>
              </div>
              <div className="lescads"></div>
              <div className="cadenas" id="cadenas1"></div>
              <div className="cadenas" id="cadenas2"></div>
              <div className="cadenas" id="cadenas3"></div>
              <div className="cadenas" id="cadenas4"></div>
              <script src={require("./camera.js")}></script>

		  </CardContent>
		  <CardActions>
			<NavLink to="/home" className="card-button">
			  <Button id="authButton" size="small" color="primary" className="card-button">
				Authentification
			  </Button>
			</NavLink>
		  </CardActions>
		</Card>
	);
  }
}

export default (Login);
