import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

class Login extends React.Component {

  render() {

	return (
		<Card className="card">
		  <CardContent>
			<Typography className="title" color="textSecondary" style={{fontFamily: 'Calibri Light'}} gutterBottom>
			  Accès sécurisé à ExplorationBoard
			</Typography>
			<Typography variant="h5" style={{fontFamily: 'Calibri Light'}} component="h2">
			  Coucou
			</Typography>
			<Typography style={{fontFamily: 'Calibri Light'}} component="p">
			  Voila
			</Typography>
		  </CardContent>
		  <CardActions>
			<NavLink to="/home" className="card-button">
			  <Button size="small" color="primary" className="card-button">
				Authentification
			  </Button>
			</NavLink>
		  </CardActions>
		</Card>
	);
  }
}

export default (Login);
