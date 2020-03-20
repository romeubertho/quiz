import React from 'react';
import './App.css';
import Questions from "./components/Questions";
import {Breadcrumb, Layout, Menu} from "antd";

const {Header, Content, Footer} = Layout;

class App extends React.Component {
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
                        <Menu.Item key="1">New Question</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 0, minHeight: 380}}>
                        <Questions/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Question Manager</Footer>
            </Layout>
        );
    }
};
export default App;
