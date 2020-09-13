import React, {Component} from "react";
import { PageHeader,Table,Tag,Select,  Button, Layout, Menu, Breadcrumb,Space, Card,Col, Row } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {HomeOutlined, AlignLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import  'echarts/lib/chart/line';
moment.locale('zh-cn');
const { Column, ColumnGroup } = Table;
const { Option } = Select;
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;
const data = [
    {
      key: '1',
      ID: '1',
      Name: 'Ostu Service',
      Version: 'V1.1.2',
      Type: 'Private',
      Time: '2020.09.01 13:13',
      tags: ['Online'],
    },
    {
      key: '2',
      ID: '2',
      Name: 'RF Service',
      Version: 'V1.1.2',
      Type: 'Public',
      Time: '2020.09.01 13:13',
      tags: ['Online'],
    },
    {
      key: '3',
      ID: '3',
      Name: 'CD Service',
      Version: 'V1.1.2',
      Type: 'Private',
      Time: '2020.09.01 13:13',
      tags: ['Offline'],
    },
  ];
function onPanelChange(value, mode) {
    console.log(value, mode);
}
function handleChange(value) {
    console.log(`selected ${value}`);
  }

class Sinfo extends Component{
    constructor(){
        super();
        this.state = {};
    }
    
    render(){
        const rowSelection = {
            checkStrictly : 0
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
                                    defaultSelectedKeys={['5']}
                                    defaultOpenKeys={['sub4']}
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
                            <Content className="contentmain" style={{ padding: '0 24px'}}>
                            <div className="site-card-wrapper">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="smanage" >服务管理</a></Breadcrumb.Item>
                            </Breadcrumb>
                                       <Card>
                                          <Row>
                                        <Col span={12}>
                                            <p>处理服务基础信息</p>
                                        </Col>
                                        <Col span={12}>
                                            <Select defaultValue="全部状态" style={{ width: 150, float: "right", margin: 3 }} onChange={handleChange}>
                                                <Option value="全部">全部</Option>
                                                <Option value="等待发送">等待发送</Option>
                                                <Option value="发送中">发送中</Option>
                                            </Select>
                                            <Select defaultValue="全部类型" style={{ width: 150, float: "right", margin: 3 }} onChange={handleChange}>
                                                <Option value="全部">全部</Option>
                                                <Option value="即时短信">即时短信</Option>
                                                <Option value="定时短信">定时短信</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    </Card>
                                        <Table dataSource={data} rowSelection={rowSelection} bordered={true}>
                                            <Column title="ID" dataIndex="ID" key="ID" />
                                            <Column title="Name" dataIndex="Name" key="Name" />
                                            <Column title="Version" dataIndex="Version" key="Version" />
                                            <Column title="Type" dataIndex="Type" key="Type" />
                                            <Column
                                                title="Status"
                                                dataIndex="tags"
                                                key="tags"
                                                render={tags => (
                                                    <>
                                                    {tags.map(tag => (
                                                        tag == "Online" ?
                                                        <Tag color="green" key={tag}>
                                                        {tag}
                                                        </Tag>
                                                        :
                                                        <Tag color="red" key={tag}>
                                                        {tag}
                                                        </Tag>
                                                    ))}
                                                    </>
                                                )}
                                                />
                                                <Column title="Creat Time" dataIndex="Time" key="Time" />
                                                <Column
                                                title="操作"
                                                key="action"
                                                render={(text, record) => (
                                                    <Space size="middle">
                                                    <Button href="/smanage">操作</Button>
                                                    <Button>删除</Button>
                                                    </Space>
                                                )}
                                                />
                                            </Table>
                            </div>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            )
        }
}
    
export default Sinfo;