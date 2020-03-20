import React from 'react';
import '../index.css';
import {createQuestion} from "../mutations/CreateQuestionMutation";
import {addAnswer} from "../mutations/AddAnswerMutation";

class QuestionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answers: []
        }
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
            <div className="question_input">
                <h1 className="page-title">New Question</h1>
                <div className="question_input_form">
                    <hr/>
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
                <hr/>
                <button onClick={() => this._createQuestion()}>Submit</button>
            </div>
        );
    }

    async _createQuestion() {
        const question = this.state.question;
        const answers = this.state.answers;
        console.log(question)
        let response = await createQuestion(question)
        let qid = response.createQuestion._id
        console.log(qid)
        answers.map(answer => (
            addAnswer(qid, answer)
        ))
    }
}

export default QuestionInput;