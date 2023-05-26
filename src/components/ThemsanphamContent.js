import { Button, Select, Space } from 'antd'
import React from 'react'
import { Input, Form, Row, Col} from 'antd'
import { FileImageOutlined } from '@ant-design/icons'

function ThemsanphamContent() {
  return (
    <div>
        <div style={{width: '100%', height: '30px', border: '1px solid black'}}>
            <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Thêm sản phẩm</h3>
        </div>
        <div>
            <h3 style={{fontWeight: 'unset', marginTop: '10px'}}>Tạo mới sản phẩm</h3>
        </div>
        <div className='Themsanpham' />
        <div style={{height: '70px', marginTop: '15px', justifyContent: 'center', display: 'flex'}}>
        <Space size={[8, 26]} wrap>
            <Button style={{backgroundColor: '#5C8E44', width: '20vw'}}>Thêm nhà cung cấp</Button>
            <Button style={{backgroundColor: '#5C8E44', marginLeft: '40px', width: '20vw'}}>Thêm danh mục</Button>
            <Button style={{backgroundColor: '#5C8E44', marginLeft: '40px', width: '20vw'}}>Thêm tình trạng</Button>
        </Space>
        </div>
        <Form layout="vertical" name="form_in_modal">
          <Row justify={"space-between"} wrap>
            <Col span={7}>
              <Form.Item label="Mã sản phẩm">
                <Input type="text" placeholder="Mã sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Tên sản phẩm">
                <Input type="text" placeholder="Tên sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Số lượng">
                <Input type="text" placeholder="Số lượng" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form layout="vertical" name="form_in_modal">
          <Row justify={"space-between"} wrap>
            <Col span={7}>
              <Form.Item label="Tình trạng">
              <Select
                    defaultValue="- Chọn tình trạng -"
                    style={{ marginRight: "10px", width: "100%" }}
                    options={[
                        {
                            value: 1,
                            label: "Đang hết hàng",
                        },
                        {
                            value: 2,
                            label: "Còn hàng"
                        },
                    ]}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Danh mục">
                <Select
                    defaultValue="- Chọn danh mục -"
                    style={{ marginRight: "10px", width: "100%" }}
                    options={[
                        {
                            value: 1,
                            label: "Iphone",
                        },
                        {
                            value: 2,
                            label: "Samsung",
                        },
                        {
                            value: 3,
                            label: "Realmi",
                        },
                        {
                            value: 4,
                            label: "Readmi",
                        },
                    ]}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Nhà cung cấp">
                <Select
                    defaultValue="- Chọn nhà cung cấp -"
                    style={{ marginRight: "10px", width: "100%" }}
                    options={[
                        {
                            value: 1,
                            label: "CellphoneS",
                        },
                        {
                            value: 2,
                            label: "Fpt",
                        },
                        {
                            value: 3,
                            label: "Smartphone",
                        },
                        {
                            value: 4,
                            label: "MyTell",
                        },
                    ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form layout="vertical" name="form_in_modal">
          <Row justify={'start'} wrap>
            <Col span={7}>
              <Form.Item label="Giá bán">
                <Input type="text" placeholder="Giá bán" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div style={{marginTop: '10px'}}>
            <h3 style={{fontWeight: 'unset'}}>Ảnh sản phẩm</h3>
        </div>
        <div style={{marginTop: '10px'}}>
            <Button style={{width: '150px', backgroundColor: 'black'}}>
                <p style={{color: 'white'}}>
                <FileImageOutlined style={{paddingRight: '8px'}}/>
                Chọn ảnh 
                </p> 
            </Button>
        </div>
    </div>
  )
}

export default ThemsanphamContent