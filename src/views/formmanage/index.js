import React, {Component} from "react";
import { PageHeader,Table,Modal,Popconfirm, message,Form, Input, Button, Layout, Menu, Breadcrumb,Space, Card } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined, AlignLeftOutlined } from '@ant-design/icons';
import {HomeOutlined} from '@ant-design/icons';
import moment from 'moment';
import Search from "antd/lib/input/Search";
moment.locale('zh-cn');
const { Column, ColumnGroup } = Table;
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;
const data = [
    {
      key: '1',
      TagName: '标签1',
      PictureNumber: '13',
    },
    {
      key: '2',
      TagName: '标签2',
      PictureNumber: '18',
    },
    {
      key: '3',
      TagName: '标签3',
      PictureNumber: '17',
    },
  ];
function onPanelChange(value, mode) {
    console.log(value, mode);
}

const textconfirm = '确定删除该标签？';

const layout = {
    labelCol: { span: 0.7 },
    wrapperCol: { span: 7 },
  }
    const onFinish = values => {
      console.log(values);
    };

function confirm() {
  message.info('Clicked on Yes.');
}

class formmanage extends Component{
    constructor(){
        super();
        this.state = {visible: false};
    }
    // showModal = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   };
    
    //   handleOk = e => {
    //     console.log(e);
    //     this.setState({
    //       visible: false,
    //     });
    //   };
    
    //   handleCancel = e => {
    //     console.log(e);
    //     this.setState({
    //       visible: false,
    //     });
    //   };
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
                                    defaultSelectedKeys={['10']}
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
                                        <Menu.Item key="10"><a href="/formmanage"></a><AlignLeftOutlined />表单管理</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                        <Content className="contentmain" style={{ padding: '0 24px' }}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/formmanage" >表单管理</a></Breadcrumb.Item>
                                <Breadcrumb.Item>编辑表单</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-card-wrapper">
                                <Card>
                                <Form {...layout}
                                 name="nest-messages" 
                                 onFinish={onFinish} 
                                >
                                    <Form.Item name={['user', 'website']} label="标题">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name={['user', 'introduction']} label="描述">
                                        <Input.TextArea />
                                    </Form.Item>
                                    </Form>
                                    <p>表单：</p> 
                                        <Table dataSource={data} 
                                        // rowSelection={rowSelection}
                                        // hideSelectAll="true"
                                        >
                                                <Column title="排序" dataIndex="TagName" key="TagName"  align="center"/>
                                                <Column title="类型" dataIndex="PictureNumber" key="PictureNumber"  align="center" />
                                                <Column title="必填/选填" dataIndex="TagName" key="TagName"  align="center"/>
                                                <Column title="字段名称" dataIndex="TagName" key="TagName"  align="center"/>
                                                <Column title="填写提示" dataIndex="TagName" key="TagName"  align="center"/>
                                        <Column
                                            title="操作"
                                            align="center"
                                            key="action"
                                            render={(text, record) => (
                                                <Space size="middle">
                                                    <Button onClick={this.showModal}>编辑</Button>
                                                    <Modal
                                                        title="编辑标签"
                                                        cancelText="取消"
                                                        okText="确定"
                                                        visible={this.state.visible}
                                                        onOk={this.handleOk}
                                                        onCancel={this.handleCancel}
                                                    >
                                                        <Input defaultValue="标签1" allowClear="true" />
                                                    </Modal>
                                                    <Popconfirm placement="left" title={textconfirm} onConfirm={confirm} okText="Yes" cancelText="No">
                                                        <Button>删除</Button>
                                                    </Popconfirm>
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
    
export default formmanage;