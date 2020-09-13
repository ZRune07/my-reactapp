import React, {Component} from "react";
import { PageHeader, Form, Input, Button,Radio,Upload, message, Layout, Menu, Breadcrumb, Card } from 'antd';
import "./index.scss";
import { UserOutlined, LaptopOutlined, NotificationOutlined, HomeOutlined,UploadOutlined ,AlignLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
moment.locale('zh-cn');
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;

function onPanelChange(value, mode) {
    console.log(value, mode);
}
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

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

class Smanage extends Component{
    constructor(){
        super();
        this.state = {};
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
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
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="sinfo" >服务管理</a></Breadcrumb.Item>
                                <Breadcrumb.Item>服务编辑</Breadcrumb.Item>
                            </Breadcrumb>
                            <Card>
                                <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
                                    <Form.Item name={['user', 'name']} label="服务名称" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name={['user', 'type']} label="服务类型" >
                                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                                            <Radio value={1}>公开</Radio>
                                            <Radio value={2}>私有</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item name={['user', 'desfun']} label="服务功能描述">
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item name={['user', 'desfunin']} label="服务输入描述">
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item name={['user', 'desfunout']} label="服务输出描述">
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item name={['user', 'fileupload']} label="算法文件上传">
                                        <Upload {...props}>
                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                        <Button type="primary" htmlType="submit">
                                            发布
                                        </Button>
                                    </Form.Item>
                                </Form>
                                </Card>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            )
        }
}
    
export default Smanage;