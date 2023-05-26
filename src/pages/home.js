import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    PicLeftOutlined,
    SolutionOutlined,
    DollarCircleOutlined,
    LogoutOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PhanQuyen from './PhanQuyen';

const { Header, Sider, Content } = Layout;
const items=[
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Phân quyền',
      link:'/phan-quyen',
    },
    {
      key: '2',
      icon: <PicLeftOutlined />,
      label: 'Quản lý đơn hàng',
      link:'/don-hang',
    },
    {
      key: '3',
      icon: <TeamOutlined />,
      label: 'Quản lý khách hàng',
      link:'/khach-hang',
    },
    {
      key: '4',
      icon: <SolutionOutlined />,
      label: 'Quản lý sản phẩm',
      link:'/san-pham',
    },
    {
      key: '5',
      icon: <DollarCircleOutlined />,
      label: 'Thống kê doanh thu',
      link:'/thong-ke',
    },
]
const Home = ({children, link}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('1');
    const navigate = useNavigate()
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`/${link}`)
    };
    return (
      <Layout>
        <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <div className='logo-center'>
                <Avatar size={64} icon={<UserOutlined />} />
                <span className='title-logo'>Username</span>
                <div className='online'>
                    <div className='icon-logo-online'/>
                    <span>ONLINE</span>
                </div>
            </div>
          </div>
          <div className='sidebar-main'>
            {items.map((item) => (
              <div key={item.key} className='sidebar-link'>
                  <Link to={item.link} className='link'>
                      {item.icon}
                      <span className='sidebar-link-label'>{item.label}</span>
                  </Link>
              </div>
            ))}
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              color:'white'
            }}
          >
            <div className='header-main'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
                })}
                <div className='header-center'>
                    <div className='header-title'>
                        <h1 className='header-title-1'>Smart</h1>
                        <h1 className='header-title-2'>phone</h1>
                        <h1 className='header-title-3'>Admin</h1>
                    </div>
                    <div className='button-logout'>
                        <span>ĐĂNG XUẤT</span>
                        <Link to={'/login'}>
                            <Button style={{background:'#D5D852'}} icon={<LogoutOutlined />} size={'small'} />
                        </Link>
                    </div>
                </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Home;