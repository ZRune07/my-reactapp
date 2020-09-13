import React, { Component } from "react";
import { PageHeader, Tree,  Button,  Layout, Menu, Breadcrumb, Space, Card, Col, Row, Table } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { HomeOutlined, AlignLeftOutlined, PlusCircleTwoTone } from '@ant-design/icons';
import moment from 'moment';
import 'echarts/lib/chart/line';
moment.locale('zh-cn');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function onPanelChange(value, mode) {
    console.log(value, mode);
}
const { DirectoryTree } = Tree;
const columns = [
    {
        title: '',
        dataIndex: 'a',
        key: 'a',
    },
    {
        title: '',
        dataIndex: 'b',
        key: 'b',
    },
];
const dataSource = [
    {
        key: '1',
        a: 'style',
        b: 'simple cacilation',
    },
    {
        key: '2',
        a: 'Categories',
        b: '地理信息服务/处理服务',
    },
    {
        key: '3',
        a: 'Language',
        b: 'EN',
    },
    {
        key: '4',
        a: 'Name',
        b: '缓冲区分析服务',
    },
    {
        key: '5',
        a: 'Keywords',
        b: '缓冲区；多边形；半径',
    },
    {
        key: '6',
        a: 'Abstract',
        b: '缓冲区分析',
    },
    {
        key: '7',
        a: 'Input',
        b: '矢量数据；缓冲半径',
    },
    {
        key: '8',
        a: 'Output',
        b: '缓冲后矢量数据',
    },
];

const treeData = [
    {
        title: '地理信息服务',
        key: '0-0',
        children: [
            {
                title: '处理服务', key: '0-0-0', children: [
                    { title: '缓冲区分析', key: '0-0-0-0', isLeaf: true },
                ]
            },
        ],
    },
    {
        title: '遥感信息服务',
        key: '0-1',
        children: [
            {
                title: '数据服务', key: '0-1-0', children: [
                    { title: 'Landsat', key: '0-1-0-0', isLeaf: true },
                ]
            },
            {
                title: '处理服务', key: '0-1-1', children: [
                    { title: '变化检测', key: '0-1-1-0', isLeaf: true },
                ]
            },
        ],
    },
];
class CombinedCall extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
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
                                defaultSelectedKeys={['8']}
                                defaultOpenKeys={['sub5']}
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
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/singlecall" >单个服务调用</a></Breadcrumb.Item>
                            </Breadcrumb>
                            <Card>
                                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                                    <Row>
                                        <Col span={6}>
                                            <Sider className="site-layout-background" width={200}>
                                                <Button type="primary" href="#" block>服务分类</Button>
                                                <DirectoryTree
                                                    multiple
                                                    defaultExpandAll
                                                    treeData={treeData}
                                                />

                                            </Sider>
                                        </Col>
                                        <Col span={17}>
                                            <Content>
                                                <Space direction="vertical">
                                                    <h4 style={{ fontSize: 20 }}> <PlusCircleTwoTone style={{ fontSize: "30px" }} />缓冲区分析服务</h4>
                                                    <p>缓冲区分析是指以点、线、面实体为基础，自动建立其周围一定宽度范围内的缓冲区多边形图层，然后建立该图层与目标图层的叠加，进行分析而得到所需结果。它是用来解决邻近度问题的空间分析工具之一。邻近度描述了地理空间中两个地物距离相近的程度。</p>
                                                    <p>详细描述</p>
                                                    <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} bordered={true} />
                                                    <div className="divheight"></div>
                                                    <Button type="primary" href="/srun" style={{ size: "large", float: "right" }}>Invoke</Button>
                                                </Space>
                                            </Content>
                                        </Col>
                                    </Row>
                                </Layout>
                            </Card>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default CombinedCall;