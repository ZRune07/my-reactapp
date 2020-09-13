import React, { Component } from "react";
import { PageHeader, Form, Input, Button, Checkbox, Layout, Menu, Breadcrumb, Space, Card, Col, Row } from 'antd';
import "./index.scss";
import { HomeOutlined } from '@ant-design/icons';
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

class Register extends Component {
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
                    >

                        <div></div>
                        <h4 className="h4center">注册</h4>
                        <Row>
                            <Col span={5}>
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

                                </Form.Item> </Col>
                            <Col span={16}> <Input /></Col>
                        </Row>
                        <Row>
                            <Col span={5}>
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

                                </Form.Item> </Col>
                            <Col span={16}> <Input.Password /></Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <Form.Item
                                    label="单位"
                                    name="company"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your company!',
                                        },
                                    ]}
                                >

                                </Form.Item> </Col>
                            <Col span={16}>  <Input /></Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <Form.Item
                                    label="国家"
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your country!',
                                        },
                                    ]}
                                >
                                </Form.Item></Col>
                            <Col span={16}>  <Input /></Col>
                        </Row>
                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit" href="/register" size="middle" className="register" >
                                    快速注册
                                        </Button>
                                <Button type="primary" htmlType="submit" href="/" size="middle">
                                    直接登录
                                        </Button>
                            </Space>
                        </Form.Item>
                        <p className="pname">点击“快速注册”，即代表同意<a link="#">《用户服务协议》</a></p>



                    </Card>
                </div>
            </>
        )
    }
}

export default Register;