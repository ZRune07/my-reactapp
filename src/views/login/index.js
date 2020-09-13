import React, { Component } from "react";
import { PageHeader, Form, Input, Button,Row, Col, Checkbox, Layout, Menu, Breadcrumb, Space, Card, Divider } from 'antd';
import "./index.scss";
import { HomeOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const layout = {
    labelCol: {
        span: 0,
    },
    wrapperCol: {
        span: 20,
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

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }

    // handleRouterPage = () => {
    //     App.push({
    //       pathname:'/console',
    //       query:{id:1},
    //       state:{obj: {id:1}}
    //     })
    // };

    render() {
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    avatar={<HomeOutlined />}
                    title="地理信息处理服务协同平台"
                />

                <div className="form-warp">
                    <Card
                        hoverable
                        className="cardbasic"
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Space className="space1" direction="vertical" size="large">
                            <div></div>
                            <div className="divcenter">账号密码登录</div>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Row gutter={[8, 8]}>
                                    <Col span={2}></Col>
                                    <Col span={5}><Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                    </Form.Item></Col>
                                    <Col span={16} >
                                    <Input />
                                    
                                    </Col>
                                    <Col span={2} />
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}></Col>
                                    <Col span={5}><Form.Item
                                        label="密 码"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        
                                    </Form.Item></Col>
                                    <Col span={16} >
                                    <Input.Password />
                                    
                                    </Col>
                                    <Col span={2} />
                                </Row>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Space>
                                        <Button type="primary" htmlType="submit" href="/console">
                                            登录
                                        </Button>
                                        <Button type="primary" htmlType="submit" href="/register">
                                            注册
                                        </Button>
                                    </Space>
                                </Form.Item>
                            </Form>

                        </Space>

                    </Card>
                </div>
            </>
        )
    }
}

export default Login;