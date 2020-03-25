import React from 'react';
import '../index.css';
import {createQuestion} from "../mutations/CreateQuestionMutation";
import {addAnswer} from "../mutations/AddAnswerMutation";
import {updateQuestion} from "../mutations/UpdateQuestionMutation";
import {updateAnswer} from "../mutations/UpdateAnswerMutation";
import {Modal} from "antd";
import {deleteAnswer} from "../mutations/DeleteAnswerMutation";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question.title,
            answers: props.question.answers,
            to_remove: [],
            to_add: []
        }
    }

    addAnswer() {
        this.setState({answers: [...this.state.answers, ""]});
    }

    handleQuestionChange(e) {
        this.setState({question: e.target.value});
    }

    handleChange(e, index) {
        this.state.answers[index] = e.target.value;
        this.setState({answers: this.state.answers});
    }

    handleRemove(index) {
        this.state.to_remove.push(this.state.answers[index]);
        this.setState({answers: this.state.answers})
    }

    handleSubmit(e) {
        console.log(this.state)
    }

    render() {
        const {isVisible}=this.props;
        return (
            <Modal
                title="Edit Question"
                style={{top: 20}}
                visible={isVisible}
                onOk={() => this._editQuestion()}
                onCancel={() => this.props.setModalVisible(false)}>

                <div className="question_input">
                    {/*<h1 className="page-title">New Question</h1>*/}
                    <div className="question_input_form">
                        {/*<hr/>*/}
                        <input
                            text="Question Title"
                            type="text"
                            ref="question_title"
                            placeholder={"Your tittle here"}
                            value={this.state.question}
                            onChange={(e) => this.handleQuestionChange(e)}
                        />
                    </div>
                    {
                        this.state.answers.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <input onChange={(e) => this.handleChange(e, index)} value={answer.answer}
                                           placeholder={'Answer ' + (index + 1)}/>
                                    <button onClick={() => this.handleRemove(index)}>Remove</button>
                                </div>
                            )
                        })
                    }
                    <button onClick={(e) => this.addAnswer(e)}>Add Answer</button>
                </div>
            </Modal>
        );
    }

    async _createQuestion() {
        const question = this.state.question;
        const answers = this.state.answers;
        console.log(question);
        console.log(answers);
        let response = await createQuestion(question);
        let qid = response.createQuestion._id;
        this.props.setModalVisible(false);
        console.log(qid);
        answers.map(answer => (
            addAnswer(qid, answer.answer)
        ))
    }

    async _editQuestion() {
        const question = this.state.question;
        const answers = this.state.answers;
        const rm = this.state.to_remove;
        await updateQuestion(this.props.question._id, question);
        answers.map((answer) => {
            Array.isArray(answer) === true ?
                updateAnswer(answer._id, answer.answer) : addAnswer(this.props.question._id, answer);
        });
        rm.map((remove) => {
            deleteAnswer(remove._id, this.props.question._id)
        });
        this.props.setModalVisible(false);
        window.location.reload(false);
    }
}

export default Edit;