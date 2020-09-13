import React, {Component} from "react";
import { PageHeader, Layout, Menu,  Card,Col, Row, Statistic,Calendar } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined,AlignLeftOutlined } from '@ant-design/icons';
import {HomeOutlined,AreaChartOutlined} from '@ant-design/icons';
import moment from 'moment';
import echarts from 'echarts';
moment.locale('zh-cn');
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function onPanelChange(value, mode) {
    console.log(value, mode);
}

class Console extends Component{
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart'));
        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));
        // // 绘制图表
        myChart.setOption({
            title: { text: '服务调用排行' },
            tooltip: {},
            xAxis: {
                data: ["服务A", "服务A", "服务A", "服务A", "服务A", "服务A"]
            },
            yAxis: {},
            series: [{
                name: '',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart1.setOption({
            title: { text: '单位贡献度排行' },
            tooltip: {},
            xAxis: {
                
            },
            yAxis: {data: ["单位A", "单位A", "单位A", "单位A", "单位A", "单位A"]},
            series: [{
                name: '',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart2.setOption({
            title: { text: '用户贡献排行' },
            tooltip: {},
            xAxis: {
                data: ["用户A", "用户A", "用户A", "用户A", "用户A", "用户A"]
            },
            yAxis: {},
            series: [{
                name: '',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
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
                                        <Menu.Item key="1" >
                                            <a href="/console" ></a>
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
                                    <Col span={16}>
                                        <Card >
                                            <div id="chart" style={{ width: 800, height: 300 }}></div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={11}>
                                        <Card >
                                            <div id="chart1" style={{ width: 600, height: 300 }}></div>
                                        </Card>
                                    </Col>
                                    <Col span={11}>
                                        <Card >
                                            <div id="chart2" style={{ width: 600, height: 300 }}></div>
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