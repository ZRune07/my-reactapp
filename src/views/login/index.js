import React, {Component} from "react";
import { PageHeader, Form, Input, Button, Checkbox,Layout, Menu, Breadcrumb,Space, Card } from 'antd';
import "./index.scss";

const { Header, Content, Footer } = Layout;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
    offset: 8,
    span: 16,
    },
};
  
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

class Login extends Component{
    constructor(){
        super();
        this.state = {};
    }


    render(){
        return (
                <Space class="space1">
                    <PageHeader
                        className="site-page-header"
                        title="登录"
                        subTitle="请输入账号密码"
                    />
                    <div className = "form-warp">
                            <Card 
                                hoverable
                                style={{}}
                                className = "cardbasic"
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                <Form.Item
                                    label="用户名"
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
                                    label="密码"
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

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                    登录
                                    </Button>
                                </Form.Item>
                                </Card>
                            </div>
                </Space>
        )
    }
}

export default Login;