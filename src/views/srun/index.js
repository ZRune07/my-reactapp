import React, { Component } from "react";
import { PageHeader,  Progress, Form, Input, Button, Layout, Menu, Breadcrumb, Space, Card } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { HomeOutlined, AlignLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import echarts from 'echarts';
moment.locale('zh-cn');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Srun extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart'));
        // // 绘制图表
        myChart.setOption({
            title: { text: '计算结果分析' },
            tooltip: {},
            xAxis: {
                data: ["201901", "201902", "201903", "201904", "201905", "201906"]
            },
            yAxis: {},
            series: [{
                name: '',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render() {
        const rowSelection = {
            checkStrictly: 0
        };
        return (
            <Layout>
                <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
                <script src="http://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>
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
                                defaultSelectedKeys={['7']}
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
                        <Content className="contentmain" style={{ padding: '0 24px' }}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/singlecall" >单个服务调用</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a >服务执行</a></Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-card-wrapper">
                                <Card >
                                    <Space>
                                        <Space direction={"vertical"}>
                                            <Card title="输入数据" bordered={false}>
                                                <Form
                                                    name="basic"
                                                    initialValues={{ remember: true }}
                                                >
                                                    <Form.Item
                                                        label="矢量数据"
                                                        name="矢量数据"
                                                        rules={[{ message: '矢量数据' }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="缓冲半径"
                                                        name="缓冲半径"
                                                        rules={[{ message: '缓冲半径' }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                    <Form.Item>
                                                        <Button type="primary" htmlType="submit">
                                                            在线执行</Button>
                                                    </Form.Item>
                                                </Form>
                                            执行进度
                                            <Progress percent={30} />
                                            </Card>
                                            <Card title="输出数据" bordered={false}>
                                                <Space>
                                                    <Button type="primary" htmlType="submit">
                                                        地图显示</Button>
                                                    <Button type="primary" htmlType="submit">
                                                        数据下载</Button>
                                                </Space>
                                            </Card>
                                        </Space>
                                        <Space direction={"vertical"}>
                                            <div id="chart" style={{ width: 800, height: 400 }}></div>
                                        </Space>
                                    </Space>
                                </Card>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default Srun;