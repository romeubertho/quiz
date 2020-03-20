import React from 'react';
import '../index.css';
import environment from "../relay/Enviroment";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {Row} from "antd";
import Question from "./Question";

const query = graphql`
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
`;

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: React.createRef()
        }
    }

    setModalVisible(modalVisible) {
        this.state.modalVisible.current.setModalVisible(modalVisible);
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={query}
                variables={{}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    return (
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                {
                                    props.allQuestions.length > 0 ?
                                        props.allQuestions.map((question, index) => {
                                            return (
                                                <Question question={question} key={question._id}/>
                                            )
                                        }) :
                                        <Question question={{
                                            title: 'No question',
                                            _id: 0,
                                            answers: []
                                        }} key={0}/>
                                }
                            </Row>
                        </div>
                    );
                }}
            />
        );
    }
}

export default Questions;