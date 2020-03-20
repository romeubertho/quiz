import React from "react";
import {Radio} from "antd";

class Answers extends React.Component {
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                {
                    this.props.answers.map((answer, index) => {
                        return (
                            <Radio key={answer._id} style={radioStyle} value={answer._id}>
                                {answer.answer}
                            </Radio>
                        )
                    })
                }
            </Radio.Group>
        )
    }
}

export default Answers;