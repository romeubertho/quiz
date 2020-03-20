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
            modalVisible: React.createRef(),
            question:this.props.question,
        }
    }
    setModalVisible(modalVisible) {
        this.state.modalVisible.current.setModalVisible(modalVisible)
    }
    deleteQuestion(id){
        deleteQuestion(id);
        this.setModalVisible(false);
    }
    render() {
        return (
            <Col key={this.state.question._id} span={8} style={{paddingBottom: 24}}>
                <Card
                    title={this.state.question.title}
                    bordered={false}
                    hoverable={true}
                    actions={[<EditOutlined key='edit' onClick={() => this.setModalVisible(true)}/>,
                        <DeleteOutlined key='delete' onClick={() => this.deleteQuestion(this.state.question._id)}/>]}>
                    <Answers answers={this.state.question.answers}/>
                    <Edit ref={this.state.modalVisible} question={this.state.question}/>
                </Card>
            </Col>
        )
    }
}

export default Question;