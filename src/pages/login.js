import { Link } from 'react-router-dom'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login'>
        <div className='login-design'> 
            <div style={{marginLeft: '15px', display: 'flex', marginTop: '10px'}}>
            <h1 style={{color: '#258016', fontWeight: 'unset', fontFamily: 'cursive'}}>Admin</h1> 
            <h1 style={{color: '#6ED33F', fontWeight: 'unset', fontFamily: 'cursive'}}>Smart</h1>
            <h1 style={{fontWeight: 'unset', fontFamily: 'cursive'}}>phone</h1>
            </div>
            <div style={{border: '1px solid #D88C47', margin: '10px 10px 10px 10px'}}/>
            <div style={{marginTop: '55px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgotpassword">
                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Link>
                </Form.Item>
                <Form.Item className='login-text'>
                    <Link to="/">
                    <Button type="primary" htmlType="submit" style={{marginLeft: '80px', marginTop: '15px'}}>
                    Log in
                    </Button>
                    </Link>
                </Form.Item>
                </Form>
            </div>    
        </div>
    </div>
  );
};

export default Login;