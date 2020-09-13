import React, { Component } from "react";
import { PageHeader, Table, Avatar,  Select, Descriptions, Tabs,  Layout, Menu, Breadcrumb, Space, Card } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { HomeOutlined, AlignLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'echarts/lib/chart/line';
import Search from "antd/lib/input/Search";
moment.locale('zh-cn');
const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;
const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const tabList = [
    {
        key: '动态',
        tab: '动态',
    },
    {
        key: 'tab2',
        tab: 'tab2',
    },
];


const data = [
    {
        key: '1',
        Name: '沈十三',
        action: '新建项目青春十年计划',
        time: '5分钟前',
    },
    {
        key: '2',
        Name: '李小七',
        action: '发布文章梧桐花开',
        time: '10分钟前',
    },
    {
        key: '3',
        Name: '王大拿',
        action: '更新迭代V 2.10',
        time: '30分钟前',
    },
];
const rowSelection = {
    checkStrictly: 0
};
const contentList = {
    动态: (<Table dataSource={data} showHeader={false} pagination={false} width={100}>
        <Column title="" dataIndex="Name" key="Name" />
        <Column title="" dataIndex="action" key="action" />
        <Column title="" dataIndex="time" key="time" />

    </Table>),
    tab2: <p>content2</p>,
};

class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            key: '动态',
        };
    }
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    };
    render() {
        const rowSelection = {
            checkStrictly: 0
        };
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
                                defaultSelectedKeys={['2']}
                                defaultOpenKeys={['sub2']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="概览">
                                    <Menu.Item key="1" >
                                        <a href="/console"></a>
                                        <AlignLeftOutlined />
                                            工作台
                                        </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                                    <Menu.Item key="2">
                                        <a href="/usermanage"></a>
                                        <AlignLeftOutlined />
                                            用户管理
                                        </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="服务发布">
                                    <Menu.Item key="3">
                                        <a href="/matlabpub"></a>
                                        <AlignLeftOutlined />
                                            MATLAB程序发布
                                        </Menu.Item>
                                    <Menu.Item key="4">
                                        <a href="/pythonpub"></a>
                                        <AlignLeftOutlined />
                                            Python程序发布
                                        </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined />} title="服务管理">
                                    <Menu.Item key="5"><a href="/sinfo"></a><AlignLeftOutlined />服务信息</Menu.Item>
                                    <Menu.Item key="6"><a href="/datainfo"></a><AlignLeftOutlined />数据信息</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" icon={<NotificationOutlined />} title="服务调用">
                                    <Menu.Item key="7"><a href="/singlecall"></a><AlignLeftOutlined />单个服务调用</Menu.Item>
                                    <Menu.Item key="8"><a href="/combinedcall"></a><AlignLeftOutlined />组合服务调用</Menu.Item>
                                    <Menu.Item key="9"><a href="/picturemanage"></a><AlignLeftOutlined />图片管理</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content className="contentmain" style={{ padding: '0 24px' }}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="usermanage" >用户管理</a></Breadcrumb.Item>
                                <Breadcrumb.Item>用户详情</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-card-wrapper">
                                <Space direction="vertical" >
                                    <Card bordered={false} title="基础信息" className="no-broder-card">
                                        <Space>
                                            <Avatar size={64} icon={<UserOutlined />} />
                                            <Space direction="vertical">
                                                <div>用户名</div>
                                                <div>男</div>
                                            </Space>
                                            
                                        </Space>
                                        <br/>
                                        
                                        <Descriptions >

                                            <Descriptions.Item label="真实姓名">沈十三</Descriptions.Item>
                                            <Descriptions.Item label="手机号">17857690917</Descriptions.Item>
                                            <Descriptions.Item label="邮箱">1392695110@qq.com</Descriptions.Item>
                                            <Descriptions.Item label="生日">1992/07/27</Descriptions.Item>
                                            <Descriptions.Item label="常驻地">
                                                湖北/武汉/武昌 or 美国
                                            </Descriptions.Item>
                                            <Descriptions.Item label="公司">武汉始终科技</Descriptions.Item>
                                            <Descriptions.Item label="职位">产品</Descriptions.Item>
                                            <Descriptions.Item label="加入时间">2019/07/27 19:35:30</Descriptions.Item>
                                        </Descriptions>
                                    </Card>
                                    <Card
                                        style={{ width: '100%' }}
                                        title="数据"
                                        tabList={tabList}
                                        activeTabKey={this.state.key}
                                        bordered={false}
                                        onTabChange={key => {
                                            this.onTabChange(key, 'key');
                                        }}
                                    >
                                        {contentList[this.state.key]}
                                    </Card>

                                </Space>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default UserInfo;