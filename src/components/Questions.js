import React from 'react';
import '../index.css';
import environment from "../relay/Enviroment";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {Link} from "react-router-dom";
import {deleteQuestion} from '../mutations/DeleteQuestionMutation'


class Questions extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query QuestionsQuery {
                        allQuestions{
                            _id
                            title
                            answers{
                            _id
                            answer
                            }
                        }
                    }
                `}
                variables={{}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    return (
                        <div className="container m-t-20">
                            <h1 className="page-title">Questions</h1>
                            <div className="allquestions-page">
                                <div className="columns is-multiline">
                                    {props.allQuestions.length > 0
                                        ? props.allQuestions.map(questions => (
                                            <div className="column is-one-third" key={questions._id}>
                                                <div className="card">
                                                    <header className="card-header">
                                                        <p className="card-header-title">{questions.title}</p>
                                                    </header>
                                                    <div className="card-content">
                                                        <div className="content">
                                                            {/*{console.log(questions)}*/}
                                                            {questions.answers.length > 0 ? questions.answers.map(answer => (
                                                                <li key={answer._id}>
                                                                    {answer.answer}
                                                                </li>
                                                            )) : 'No answers created yet'
                                                            }
                                                            <br/>
                                                        </div>
                                                    </div>
                                                    <footer className="card-footer">
                                                        {/*<Link to={`edit/${questions._id}`} className="card-footer-item">*/}
                                                        {/*    Edit*/}
                                                        {/*</Link>*/}
                                                        <button className="card-footer-item"
                                                                onClick={() => console.log(questions._id)}>
                                                            Edit
                                                        </button>
                                                        <button className="card-footer-item"
                                                                onClick={() => deleteQuestion(questions._id)}>
                                                            Delete
                                                        </button>
                                                        {/*<Link to={`delete/${questions._id}`}*/}
                                                        {/*      className="card-footer-item">*/}
                                                        {/*    Delete*/}
                                                        {/*</Link>*/}
                                                    </footer>
                                                </div>
                                            </div>
                                        ))
                                        : "No Questions yet"}
                                </div>
                            </div>
                        </div>
                    );
                }}
            />
        )
            ;
    }
}

export default Questions;