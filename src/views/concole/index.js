import React, {Component} from "react";
import { PageHeader, Form, Input, Button, Checkbox,Layout, Menu, Breadcrumb,Space, Card,Col, Row, Statistic,Calendar } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {HomeOutlined,SettingFilled,SmileOutlined,SyncOutlined,LoadingOutlined,AreaChartOutlined} from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;

function onPanelChange(value, mode) {
    console.log(value, mode);
}

class Console extends Component{
    constructor(){
        super();
        this.state = {};
    }


    render(){
        return (
                <Layout>
                    <PageHeader
                        className="site-page-header"
                        avatar={<HomeOutlined />}
                        title="地理信息处理服务协同平台"
                    />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="div1"></div>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="概览">
                                        <Menu.Item key="1">工作台</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                                        <Menu.Item key="2">用户管理</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="服务发布">
                                        <Menu.Item key="3">MATLAB程序发布</Menu.Item>
                                        <Menu.Item key="4">Python程序发布</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" icon={<NotificationOutlined />} title="服务管理">
                                        <Menu.Item key="5">服务信息</Menu.Item>
                                        <Menu.Item key="6">数据信息</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub5" icon={<NotificationOutlined />} title="服务调用">
                                        <Menu.Item key="7">单个服务调用</Menu.Item>
                                        <Menu.Item key="8">组合服务调用</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content className="contentmain" style={{ padding: '0 24px'}}>
                            <div className="site-card-wrapper">
                                <Row gutter={[16,16]}>
                                    <Col span={6}>
                                        <Card >
                                            <Statistic
                                                title="应用数量"
                                                value={29}
                                                precision={0}
                                                valueStyle={{ color: 'black' }}
                                                prefix={<AreaChartOutlined />}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card >
                                            <Statistic
                                                title="服务数量"
                                                value={36254}
                                                precision={0}
                                                valueStyle={{ color: 'black' }}
                                                prefix={<AreaChartOutlined />}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card >
                                            <Statistic
                                                title="用户数量"
                                                value={861}
                                                precision={0}
                                                valueStyle={{ color: 'black' }}
                                                prefix={<AreaChartOutlined />}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card >
                                            <Statistic
                                                title="访问次数"
                                                value={135123}
                                                precision={0}
                                                valueStyle={{ color: 'black' }}
                                                prefix={<AreaChartOutlined />}
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                <Col span={8}>
                                        <Card >
                                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Card title" >
                                        Card content
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Card title" >
                                            Card content
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            )
        }
}
    
export default Console;