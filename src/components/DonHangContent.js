import React, { useState } from 'react'
import { AutoComplete, Button, Input } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const dataSource = [
    {
        key: '1',
        ma_hang: '83452356',
        ten_san_pham: 'Iphone 13 promax 512 GB - new 99%',
        anh: 'link',
        so_luong: 2,
        gia_ban: '23.290.000 đ',
    },
    {
        key: '2',
        ma_hang: '83452356',
        ten_san_pham: 'Iphone 14 promax 128 GB - new 99%',
        anh: 'link',
        so_luong: 1,
        gia_ban: '28.390.000 đ',
    },
    {
        key: '3',
        ma_hang: '83452356',
        ten_san_pham: 'Xiaomi Redmi Note 11 Pro 5G',
        anh: 'link',
        so_luong: 4,
        gia_ban: '5.690.000 đ',
    },
    {
        key: '4',
        ma_hang: '83452356',
        ten_san_pham: 'Realmi C17',
        anh: 'link',
        so_luong: 3,
        gia_ban: '5.290.000 đ',
    },
];

const renderTitle = (title) => (
  <span>
    {title}
  </span>
);

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Mã sản phẩm'),
    options: [renderItem('74635234'),
        renderItem('83457438'), 
        renderItem('73485654'), 
        renderItem('78354844'), 
        renderItem('64336575'), 
        renderItem('83452356')],
    },
  {
    label: renderTitle('Tên sản phẩm'),
    options: [renderItem('Iphone 13 promax 512GB - new 99%'), 
        renderItem('Iphone 14 promax 128 GB - new 99%'), 
        renderItem('Samsung Galaxy S22 Ultra 5G 512 GB'), 
        renderItem('Xiaomi Redmi Note 11 Pro 5G'), 
        renderItem('Realmi C17'), 
        renderItem('Poco M5s 4G LTE GSM (128GB + 6GB)')],
  },
];

function DonHangContent() {
    const [checkStrictly, setCheckStrictly] = useState(false);

    const columns = [
        {
          title: 'Mã hàng',
          dataIndex: 'ma_hang',
          key: 'ma_hang',
        },
        {
          title: 'Tên sản phẩm',
          dataIndex: 'ten_san_pham',
          key: 'ten_san_pham',
        },
        {
          title: 'Ảnh',
          dataIndex: 'anh',
          key: 'anh', 
        },
        {
          title: 'Số lượng',
          dataIndex: 'so_luong',
          key: 'so_luong',  
        },
        {
          title: 'Giá bán',
          dataIndex: 'gia_ban',
          key: 'gia_ban',
        },
        {
          title: 'Chức năng',
          render: (_, record) => (
            <div>
                <EditOutlined />
                <DeleteOutlined />
            </div>
          )
        },
    ]
    return (
        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', width: '700px', height: '490px'}}>
                <h3 style={{paddingLeft: '10px', fontWeight: 'unset'}}>Phần mềm bán hàng</h3>
                <div style={{border: '1px solid #D88C47', margin: '5px'}}/>
                <div style={{margin: '10px'}}>
                    <AutoComplete
                    popupClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={400}
                    style={{
                    width: '680px',
                    }}
                    options={options}
                    >
                    <Input.Search size="30px" placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm ..." />
                    </AutoComplete>
                </div>
                <div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </div>
            </div>
            <div style={{marginLeft: '20px', border: '1px solid black', width: '350px', height: '630px'}}>
                <h3 style={{paddingLeft: '10px', fontWeight: 'unset'}}>Thông tin thanh toán</h3>
                <div style={{border: '1px solid #D88C47', margin: '5px'}}/>
                <div style={{marginLeft: '10px'}}>
                    <h4 style={{fontWeight: 'unset'}}>Họ tên khách hàng</h4>
                    <Input style={{marginTop: '10px', width: '325px'}} placeholder="Họ tên khách hàng" />
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h4 style={{fontWeight: 'unset', marginTop: '15px'}}>Nhân viên bán hàng</h4>
                    <Input style={{marginTop: '10px', width: '325px'}} placeholder="- Chọn nhân viên bán hàng -" />
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h4 style={{fontWeight: 'unset', marginTop: '15px'}}>Ghi chú đơn hàng</h4>
                    <Input style={{marginTop: '10px', width: '325px', height: '50px'}} placeholder="Ghi chú thêm đơn hàng" />
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h4 style={{fontWeight: 'unset', marginTop: '15px'}}>Hình thức thanh toán</h4>
                    <Input style={{marginTop: '10px', width: '325px'}} placeholder="Thanh toán tiền mặt" />
                </div>
                <div style={{marginLeft: '10px', display: 'flex'}} >
                    <h4 style={{fontWeight: 'unset', marginTop: '15px'}}>Tạm tính tiền hàng :</h4>
                    <h4 style={{fontWeight: 'unset', marginTop: '15px', marginLeft: '30px'}}>Giảm giá :</h4>
                    <div>
                        <Input style={{marginTop: '50px', width: '90px'}} placeholder="" />
                    </div>
                </div>
                <h4 style={{paddingLeft: '10px', fontWeight: 'unset', marginTop: '15px'}}>Tổng cộng thanh toán :</h4>
                <div style={{marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button style={{width: '180px'}} type='primary'>Lưu đơn hàng</Button>
                </div>
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button style={{backgroundColor:'blue', color: 'yellow', width: '150px'}} type='primary'>Lưu và in đơn hàng</Button>
                    <Button style={{backgroundColor:'blue', color: 'yellow', width: '150px', marginLeft: '20px'}} type='primary'>Quay về</Button>
                </div>
            </div>
        </div>
    )
}

export default DonHangContent