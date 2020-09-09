import React, {Component} from "react";
import { PageHeader, Form, Input, Button, Checkbox,Layout, Menu, Breadcrumb } from 'antd';
import "./index.scss";

const { Header, Content, Footer } = Layout;

class Login extends Component{
    constructor(){
        super();
        this.state = {};
    }


    render(){
        return (
                <Layout>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => null}
                        title="Title"
                        subTitle="This is a subtitle"
                    />

                        <form class="form1">
                            <Form
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                            ></Form>
                            
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            
                        </form>
                </Layout>
        )
    }
}

export default Login;