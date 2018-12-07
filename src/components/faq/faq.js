import React from 'react';
import QuestionCard from './question-card';
import qtns from './questions.json';

import './faq.css';

class Faq extends React.Component {

    render() {
        const qs = qtns.questions_cards;

        return (
            <div className="faq">
                <h2>F.A.Q</h2>
                <h3>{qtns.sub_title}</h3>
                <div className="cards">
                    {qs.map(question => (
                        <QuestionCard
                            key={question.index}
                            title={question.title}
                            resume={question.resume}
                            description={question.description}
                            datePublished={question.datePublished}
                            tags={question.tags}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Faq;
