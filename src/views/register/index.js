import React, {Component} from "./node_modules/react";
import { PageHeader, Form, Input, Button, Checkbox,Layout, Menu, Breadcrumb,Space, Card } from './node_modules/antd';
import "./index.scss";
import { HomeOutlined } from './node_modules/@ant-design/icons';
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

class Register extends Component{
    constructor(){
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

    render(){
        return (
            <>
                <PageHeader
                        className="site-page-header"
                        avatar={<HomeOutlined />}
                        title="地理信息处理服务协同平台"
                />
                
                    <div className = "form-warp">
                            <Card 
                                hoverable
                                className = "cardbasic"
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                <Space className="space1" direction="vertical">
                                    <div></div>
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
                                    <Button type="primary" htmlType="submit" href="/console">
                                        登录
                                    </Button>
                                </Form.Item>
                                </Space>
                                
                                </Card>
                            </div>
            </>
        )
    }
}

export default Register;