import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class QuestionCard extends React.Component {

    constructor() {
        super();

        this.state = {
            isOpen: false,
        };

        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        this.setState({isOpen : !this.state.isOpen});
    }

    render() {
        const {title, resume, description, datePublished, tags} = this.props;
        const isOpen = this.state.isOpen;

        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary"  style={{fontFamily: 'Calibri Light'}} gutterBottom>
                        {tags}
                    </Typography>
                    <Typography variant="h5"  style={{fontFamily: 'Calibri Light'}} component="h2">
                        {title}
                    </Typography>
                    <Typography  style={{fontFamily: 'Calibri Light'}} className="pos" color="textSecondary">
                        {datePublished}
                    </Typography>
                    <Typography  style={{fontFamily: 'Calibri Light'}} component="p">
                        {resume}
                    </Typography>
                    { isOpen === true ?
                        <Typography  style={{fontFamily: 'Calibri Light'}} component="p">
                            {description}
                        </Typography> : null
                    }
                </CardContent>
                <CardActions>
                    <Button size="small" className="card-button" onClick={this.toggleCard}>Voir plus</Button>
                </CardActions>
            </Card>
        );
    }
}

QuestionCard.propTypes = {
    title: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
};

export default (QuestionCard);