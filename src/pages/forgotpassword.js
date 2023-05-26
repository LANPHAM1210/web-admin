import { Link } from 'react-router-dom'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Forgotpassword() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='forgot'>
        <div className='forgot-design'>
        <div style={{marginLeft: '15px', display: 'flex', marginTop: '10px'}}>
            <h1 style={{color: '#258016', fontWeight: 'unset', fontFamily: 'cursive'}}>Admin</h1> 
            <h1 style={{color: '#6ED33F', fontWeight: 'unset', fontFamily: 'cursive'}}>Smart</h1>
            <h1 style={{fontWeight: 'unset', fontFamily: 'cursive'}}>phone</h1>
            </div>
            <div style={{border: '1px solid #D88C47', margin: '10px 10px 10px 10px'}}/>
            <div style={{marginTop: '55px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>     
            <Form
                name="normal_forgot"
                className="forgotpassword-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
            <Form.Item
                name="enter email"
                rules={[{ required: true, message: 'Please input your Enter email!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter email" />
            </Form.Item>
            <Form.Item
                name="password retrieval"
                rules={[{ required: true, message: 'Please input your Password retrieval!' }]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password retrieval"
                placeholder="Password retrieval"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle></Form.Item>
                <Checkbox>Remember me</Checkbox>
                
                <Form.Item>
                <Link to="/login">
                    <Button type="primary" htmlType="submit" style={{marginLeft: '70px', marginTop: '55px'}}>
                    Log in
                    </Button>
                </Link>
                </Form.Item>
            </Form.Item>
            </Form> 
            </div>   
        </div>
    </div>
  );
};

export default Forgotpassword;