import { Button, Space } from 'antd'
import React from 'react'
import { Input, Form, Row, Col} from 'antd'
import { FileImageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function ThemkhachhangContent() {
  return (
    <div>
        <div style={{width: '100%', height: '30px', border: '1px solid black'}}>
            <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Thêm khách hàng</h3>
        </div>
        <div>
            <h3 style={{paddingLeft: '10px', fontWeight: 'unset', marginTop: '10px'}}>Tạo mới khách hàng</h3>
        </div>
        <div className='Themsanpham' />
        <div style={{margin: '10px 50px 10px 50px'}}>
            <Form layout="vertical" name="form_in_modal">
            <Row justify={"space-between"} wrap>
                <Col span={7}>
                <Form.Item label="Mã khách hàng">
                    <Input type="text" placeholder="Mã khách hàng" />
                </Form.Item>
                </Col>
                <Col span={7}>
                <Form.Item label="Tên khách hàng">
                    <Input type="text" placeholder="Tên khách hàng" />
                </Form.Item>
                </Col>
                <Col span={7}>
                <Form.Item label="Địa chỉ">
                    <Input type="text" placeholder="Địa chỉ" />
                </Form.Item>
                </Col>
            </Row>
            </Form>
            <Form layout="vertical" name="form_in_modal">
            <Row justify={"space-between"} wrap>
                <Col span={7}>
                <Form.Item label="Số điện thoại">
                    <Input type="text" placeholder="Số điện thoại" />
                </Form.Item>
                </Col>
                <Col span={7}>
                <Form.Item label="Đơn hàng">
                    <Input type="text" placeholder="Đơn hàng" />
                </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Mật khẩu">
                        <Input type="text" placeholder="Mật khẩu" />
                    </Form.Item>
                </Col>
            </Row>
            </Form>
        </div>
        <div style={{margin: '180px 0 0 950px'}}>
            <Button style={{backgroundColor: 'red'}}>Update</Button>
        </div>
    </div>
  )
}

export default ThemkhachhangContent