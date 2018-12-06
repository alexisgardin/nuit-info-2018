import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

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
        const {key, title, resume, description, datePublished, tags} = this.props;
        const isOpen = this.state.isOpen;

        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        {tags}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className="pos" color="textSecondary">
                        {datePublished}
                    </Typography>
                    <Typography component="p">
                        {resume}
                    </Typography>
                    { isOpen === true ?
                        <Typography component="p">
                            {description}
                        </Typography> : null
                    }
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.toggleCard}>Voir plus</Button>
                </CardActions>
            </Card>
        );
    }
}

QuestionCard.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default withStyles(styles)(QuestionCard);