import React, {Component} from "react";
import { PageHeader,Table,Tag,Select,Descriptions, Form, Input, Button, Checkbox,Layout, Menu, Breadcrumb,Space, Card,Col, Row, Statistic,Calendar } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {HomeOutlined,SettingFilled,SmileOutlined,SyncOutlined,LoadingOutlined,AreaChartOutlined} from '@ant-design/icons';
import moment from 'moment';
import  'echarts/lib/chart/line';
import Search from "antd/lib/input/Search";
moment.locale('zh-cn');
const { Column, ColumnGroup } = Table;
const { Option } = Select;
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;
const data = [
    {
      key: '1',
      Name: '张三',
      phoneNumber: '13153389045',
      email: '1392695110@qq.com',
      address: '湖北/武汉/武昌',
      tags: ['未认证'],
    },
    {
      key: '2',
      Name: '李四',
      phoneNumber: '18353360235',
      email: 'syh@hotmail.com',
      address: '美国',

      tags: ['已认证'],
    },
    {
      key: '3',
      Name: '王五',
      phoneNumber: '17857690917',
      email: '13456@qq.com',
      address: '哈萨克斯坦',
      tags: ['未认证'],
    },
  ];
function onPanelChange(value, mode) {
    console.log(value, mode);
}


class UserManage extends Component{
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
                                    defaultSelectedKeys={['2']}
                                    defaultOpenKeys={['sub2']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="概览">
                                        <Menu.Item key="1" >
                                            <a href="/console"></a>
                                            工作台
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                                        <Menu.Item key="2">
                                            <a href="/usermanage"></a>
                                            用户管理
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="服务发布">
                                        <Menu.Item key="3">
                                            <a href="/matlabpub"></a>
                                            MATLAB程序发布
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <a href="/pythonpub"></a>
                                            Python程序发布
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" icon={<NotificationOutlined />} title="服务管理">
                                        <Menu.Item key="5"><a href="/sinfo"></a>服务信息</Menu.Item>
                                        <Menu.Item key="6"><a href="/datainfo"></a>数据信息</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub5" icon={<NotificationOutlined />} title="服务调用">
                                        <Menu.Item key="7"><a href="/singlecall"></a>单个服务调用</Menu.Item>
                                        <Menu.Item key="8"><a href="/combinedcall"></a>组合服务调用</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content className="contentmain" style={{ padding: '0 24px'}}>
                                <Breadcrumb>
                                    <Breadcrumb.Item><a href="usermanage" >用户管理</a></Breadcrumb.Item>
                                </Breadcrumb>
                            <div className="site-card-wrapper">
                                
                                        <Card>
                                            <p>用户搜索</p>
                                            <Input.Group compact>
                                                <Select defaultValue="username">
                                                    <Option value="username">用户名</Option>
                                                    <Option value="phonenum">手机号</Option>
                                                </Select>
                                                <Search style={{ width: '50%' }} placeholder="input search text" enterButton="Search" onSearch={value => console.log(value)}/>
                                            </Input.Group>
                                        </Card>
                                        <Card >
                                        <Table dataSource={data} rowSelection={rowSelection}>
                                                <Column title="姓名" dataIndex="Name" key="Name" />
                                                <Column title="手机号" dataIndex="phoneNumber" key="phoneNumber" />
                                                <Column title="邮箱" dataIndex="email" key="email" />
                                                <Column
                                                title="认证"
                                                dataIndex="tags"
                                                key="tags"
                                                render={tags => (
                                                    <>
                                                    {tags.map(tag => (
                                                        tag == "已认证" ?
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
                                                <Column title="所在单位" dataIndex="address" key="address" />
                                                <Column
                                                title="操作"
                                                key="action"
                                                render={(text, record) => (
                                                    <Space size="middle">
                                                        <Button htmlType="submit"  href="/userinfo">操作</Button>
                                                        <Button>删除</Button>
                                                    </Space>
                                                )}
                                                />
                                            </Table>
                                        </Card>
                            </div>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            )
        }
}
    
export default UserManage;