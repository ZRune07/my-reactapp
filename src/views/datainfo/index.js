import React, {Component} from "react";
import { PageHeader,Table,Tag,Select, Form, Input, Button,Upload, message, Checkbox,Layout, Menu, Breadcrumb,Space, Card,Col, Row, Statistic,Calendar } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {HomeOutlined,UploadOutlined,SettingFilled,SmileOutlined,SyncOutlined,LoadingOutlined,AreaChartOutlined} from '@ant-design/icons';
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
      ID: '1',
      Name: 'Landsat',
      Size: '50.5M',
      Type: 'Private',
      Time: '2020.09.01 13:13',
      tags: ['Online'],
    },
    {
      key: '2',
      ID: '2',
      Name: 'Landsat',
      Size: '50.5M',
      Type: 'Public',
      Time: '2020.09.01 13:13',
      tags: ['Online'],
    },
    {
      key: '3',
      ID: '3',
      Name: 'Landsat',
      Size: '50.5M',
      Type: 'Private',
      Time: '2020.09.01 13:13',
      tags: ['Offline'],
    },
  ];
function onPanelChange(value, mode) {
    console.log(value, mode);
}
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

class DataInfo extends Component{
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
                                    defaultSelectedKeys={['6']}
                                    defaultOpenKeys={['sub4']}
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
                            <div className="site-card-wrapper">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="datainfo" >数据信息管理</a></Breadcrumb.Item>
                            </Breadcrumb>
                                        <Card>
                                            <p>查找条目</p>
                                            <Input.Group compact>
                                                <Select defaultValue="Name">
                                                    <Option value="name">Name</Option>
                                                    <Option value="type">ID</Option>
                                                </Select>
                                                <Search style={{ width: '50%' }} placeholder="input search text" enterButton="Search" onSearch={value => console.log(value)}/>
                                            </Input.Group>
                                        </Card>
                                        <Card >
                                        <Table dataSource={data} rowSelection={rowSelection}>
                                            <Column title="ID" dataIndex="ID" key="ID" />
                                            <Column title="Name" dataIndex="Name" key="Name" />
                                            <Column
                                                title="Storage"
                                                key="action"
                                                render={(text, record) => (
                                                    <Space size="middle">
                                                        <Upload {...props}>
                                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                        </Upload>
                                                    </Space>
                                                )}
                                                />
                                            <Column title="Size" dataIndex="Size" key="Size" />
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
                                                        <Button href="/datadescription">Description</Button>
                                                        <Button>Delete</Button>
                                                        <Button>Download</Button>
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
    
export default DataInfo;