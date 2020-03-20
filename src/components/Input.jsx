import React from 'react';
import '../index.css';
import {createQuestion} from "../mutations/CreateQuestionMutation";
import {addAnswer} from "../mutations/AddAnswerMutation";
import {Modal} from "antd";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: props.visible,
            question: "",
            answers: []
        }
    }

    setModalVisible(modalVisible) {
        this.setState({modalVisible: modalVisible})
    }

    addAnswer() {
        this.setState({answers: [...this.state.answers, ""]});
    }

    handleQuestionChange(e) {
        this.state.question = e.target.value;
        this.setState({question: this.state.question});
    }

    handleChange(e, index) {
        this.state.answers[index] = e.target.value;
        this.setState({answers: this.state.answers});
    }

    handleRemove(index) {
        console.log(this.state.answers)
        this.state.answers.splice(index, 1)
        console.log(this.state.answers)
        this.setState({answers: this.state.answers})
    }

    handleSubmit(e) {
        console.log(this.state)
    }

    render() {
        return (
            <Modal
                title="New Question"
                style={{top: 20}}
                visible={this.state.modalVisible}
                onOk={() => this._createQuestion()}
                onCancel={() => this.setModalVisible(false)}>

                <div className="question_input">
                    <div className="question_input_form">
                        <input
                            text="Question Title"
                            type="text"
                            ref="question_title"
                            placeholder="Your tittle here"
                            onChange={(e) => this.handleQuestionChange(e)}
                        />
                    </div>
                    {
                        this.state.answers.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <input onChange={(e) => this.handleChange(e, index)} value={answer}
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
        let response = await createQuestion(question);
        let qid = response.createQuestion._id;
        console.log(qid);
        answers.map(answer => (
            addAnswer(qid, answer)
        ));
        this.setModalVisible(false);
    }
}

export default Input;