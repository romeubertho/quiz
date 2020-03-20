import React from 'react';
import './App.css';
import Questions from "./components/Questions";
import {Breadcrumb, Layout, Menu} from "antd";
import Input from "./components/Input";

const {Header, Content, Footer} = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: React.createRef()
        }
    }
    setModalVisible(modalVisible) {
        this.state.modalVisible.current.setModalVisible(modalVisible)
    }
    render() {
        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    {/*<div className="logo"/>*/}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}>
                        <Menu.Item onClick={() =>this.setModalVisible(true)} key="1">New Question</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 0, minHeight: 380}}>
                        <Questions/>
                        <Input ref={this.state.modalVisible}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Question Manager</Footer>
            </Layout>
        );
    }
};
export default App;
