import { Button, Space } from 'antd'
import React from 'react'
import { Input, Form, Col, Row} from 'antd'
import { FileImageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function ThemnhanvienContent() {
  return (
    <div>
        <div style={{width: '100%', height: '30px', border: '1px solid black'}}>
            <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Thêm nhân viên</h3>
        </div>
        <div>
            <h3 style={{paddingLeft: '10px', fontWeight: 'unset', marginTop: '10px'}}>Tạo mới nhân viên</h3>
        </div>
        <div className='Themsanpham' />
            <div style={{margin: '10px 50px 10px 50px'}}>
            <Form layout="vertical" name="form_in_modal">
                <Row justify={"space-between"} wrap>
                    <Col span={6}>
                    <Form.Item label="Mã nhân viên">
                        <Input type="text" placeholder="Mã nhân viên" />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Form.Item label="Tên nhân viên">
                        <Input type="text" placeholder="Tên nhân viên" />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Form.Item label="Ảnh">
                        <Input type="text" placeholder="Ảnh" />
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
                <Form layout="vertical" name="form_in_modal">
                <Row justify={"space-between"} wrap>
                    <Col span={6}>
                    <Form.Item label="Email">
                        <Input type="text" placeholder="Email" />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Form.Item label="Username">
                        <Input type="text" placeholder="Username" />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Form.Item label="Mật khẩu">
                        <Input type="text" placeholder="Mật khẩu" />
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
            </div>
        <div style={{marginTop: '15px'}}>
            <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Ghi chú</h3>
            <input style={{marginTop: '8px', width: '100%', height: '150px'}} />
        </div>
        <div style={{margin: '190px 0 0 950px'}}>
            <Button style={{backgroundColor: 'red'}}>Update</Button>
        </div>
    </div>
  )
}

export default ThemnhanvienContent