import React from "react";
import {Card, Col} from "antd";
import {deleteQuestion} from "../mutations/DeleteQuestionMutation";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Edit from "./Edit";
import Answers from "./Answers";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    setModalVisible(modalVisible) {
        this.setState({isModalVisible: modalVisible})
    }

    deleteQuestion(id) {
        deleteQuestion(id);
        this.setModalVisible(false);
        window.location.reload(false);
    }

    render() {
        const {question} = this.props;
        return (
            <Col key={question._id} span={8} style={{paddingBottom: 24}}>
                <Card
                    title={question.title}
                    bordered={false}
                    hoverable={true}
                    actions={[<EditOutlined key='edit' onClick={() => this.setModalVisible(true)}/>,
                        <DeleteOutlined key='delete' onClick={() => this.deleteQuestion(question._id)}/>]}>
                    <Answers answers={question.answers}/>
                </Card>
                <Edit isVisible={this.state.isModalVisible} setModalVisible={() => this.setModalVisible()}
                      question={question}/>
            </Col>
        )
    }
}

export default Question;