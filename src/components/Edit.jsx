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
            modalVisible: props.visible,
            question: props.question.title,
            answers: props.question.answers,
            to_remove:[]
        }
    }

    setModalVisible(modalVisible) {
        this.setState({modalVisible: modalVisible})
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
        console.log(this.state.to_remove);
        this.state.answers.splice(index, 1);
        console.log(this.state.answers);
        this.setState({answers: this.state.answers})
    }

    handleSubmit(e) {
        console.log(this.state)
    }

    render() {
        return (
            <Modal
                title="Edit Question"
                style={{top: 20}}
                visible={this.state.modalVisible}
                onOk={() => this._editQuestion()}
                onCancel={() => this.setModalVisible(false)}>

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
                    <hr/>
                    <button onClick={() => this._createQuestion()}>Submit</button>
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
        this.setModalVisible(false);
        console.log(qid);
        answers.map(answer => (
            addAnswer(qid, answer.answer)
        ))
    }
    async _editQuestion(){
        const question = this.state.question;
        const answers = this.state.answers;
        const rm = this.state.to_remove;
        await updateQuestion(this.props.question._id,question);
        answers.map((answer)=>{
            updateAnswer(answer._id,answer);
        });
        rm.map((remove)=>{
            deleteAnswer(remove._id,this.props.question._id)
        })
        this.setModalVisible(false);
    }
}

export default Edit;