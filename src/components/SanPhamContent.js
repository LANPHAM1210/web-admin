import React, { useState } from 'react'
import { Button, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Title from 'antd/es/skeleton/Title';

const dataSource = [
    {
        key: '1',
        ma_san_pham: '83452356',
        ten_san_pham: 'Iphone 13 promax 512GB - new 99%',
        anh: 'link',
        so_luong: 20,
        tinh_trang: 'Còn hàng',
        gia_tien: '23.290.000',
        danh_muc: 'Iphone', 
        nha_cung_cap: 'Fpt', 
    },
    {
        key: '2',
        ma_san_pham: '64336575',
        ten_san_pham: 'Iphone 14 promax 128 GB - new 99%',
        anh: 'link',
        so_luong: 20,
        tinh_trang: 'Còn hàng',
        gia_tien: '23.290.000',
        danh_muc: 'Iphone',
        nha_cung_cap: 'CellphoneS'
    },
    {
        key: '3',
        ma_san_pham: '73485654',
        ten_san_pham: 'Samsung Galaxy S22 Ultra 5G 512 GB',
        anh: 'link',
        so_luong: 0,
        tinh_trang: 'Đang hết hàng',
        gia_tien: '31.990.000 đ',
        danh_muc: 'Samsung',
        nha_cung_cap: 'Mytell'
    },
    {
        key: '4',
        ma_san_pham: '78354844',
        ten_san_pham: 'Xiaomi Redmi Note 11 Pro 5G',
        anh: 'link',
        so_luong: 30,
        tinh_trang: 'Còn hàng',
        gia_tien: '5.690.000 đ',
        danh_muc: 'Xiaomi',
        nha_cung_cap: 'Smartphone'
    },
    {
        key: '5',
        ma_san_pham: '83457438',
        ten_san_pham: 'Realmi C17',
        anh: 'link',
        so_luong: 25,
        tinh_trang: 'Còn hàng',
        gia_tien: '5.290.000 đ',
        danh_muc: 'Realmi',
        nha_cung_cap: 'Fpt',
    },
    {
        key: '6',
        ma_san_pham: '74635234',
        ten_san_pham: 'Poco M5s 4G LTE GSM (128GB + 6GB)',
        anh: 'link',
        so_luong: 0,
        tinh_trang: 'Đang hết hàng',
        gia_tien: '5.990.000 đ',
        danh_muc: 'Xiaomi',
        nha_cung_cap: 'CellphoneS'
    },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

function SanphamContent() {
    const [checkStrictly, setCheckStrictly] = useState(false);

    const columns = [
        { 
          title: 'Mã sản phẩm',
          dataIndex: 'ma_san_pham',
          key: 'ma_san_pham',
        },
        {
          title: 'Tên sản phẩm',
          dataIndex: 'ten_san_pham',
          key: 'ten_san_phame',
        },
        {
          title: 'Nhà cung cấp',
          dataIndex: 'nha_cung_cap',
          key: 'nha_cung_cap',
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
          title: 'Tình trạng',
          dataIndex: 'tinh_trang',
          key: 'tinh_trang',  
        },
        {
          title: 'Giá tiền',
          dataIndex: 'gia_tien',
          key: 'gia_tien',
        },
        {
          title: 'Danh mục',
          dataIndex: 'danh_muc',
          key: 'danh_muc',
        },
        {
          title: 'Chức năng',
          render: (_, record) => (
            <div style={{marginLeft: '5px'}}>
                <Button style={{backgroundColor: '#FFD9D9'}}><EditOutlined style={{color: '#D23B3B'}}/></Button>
                <Button style={{backgroundColor: '#D9D9D9', marginTop: '5px'}}><DeleteOutlined /></Button>
            </div>
          )
        },
    ]

    return (
        <div>
            <div style={{width: '100%', height: '30px', border: '1px solid black'}}>
                <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Danh sách sản phẩm</h3>
            </div>
            <div style={{paddingTop: '10px'}}>
                <Space size={[8, 16]} wrap>
                    <Link to={'/themsanpham'}>
                    <Button type='primary'>Thêm sản phẩm</Button>
                    </Link>
                    <Button type='primary'>Tải dữ liệu</Button>
                    <Button type='primary'>In dữ liệu</Button>
                    <Button type='primary'>Sao chép</Button>
                    <Button type='primary'>Xuất excel</Button>
                    <Button type='primary'>Xoá tất cả</Button>
                </Space>
            </div>
            <div className='Sanpham'/>
            <div style={{marginTop: '5px', display: 'flex'}}>
                <h4 style={{fontWeight: 'unset' }}>Hiện</h4>
                <h4 style={{paddingLeft: '20px',fontWeight: 'unset'}}>danh mục</h4>
            </div>
            <div style={{marginTop:'5px', border: '1px solid black'}}>
                <Table 
                    columns={columns}
                    dataSource={dataSource}
                    rowSelection={{
                        ...rowSelection,
                    }}
                />
            </div>
        </div>
    )
}

export default SanphamContent