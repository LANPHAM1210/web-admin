import React, { useState } from 'react'
import { Button, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

const dataSource = [
    {
        key: '1',
        ma_khach_hang: '872364',
        ten_khach_hang: 'Nguyen Van An',
        dia_chi: 'Pho Noi, Hung Yen',
        so_dien_thoai: '03849563474',
        don_hang: 1,
    },
    {
        key: '2',
        ma_khach_hang: '836435',
        ten_khach_hang: 'Cao Van Hung',
        dia_chi: 'Dong Anh, Ha Noi',
        so_dien_thoai: '0347534545',
        don_hang: 4,
    },
    {
        key: '3',
        ma_khach_hang: '94373',
        ten_khach_hang: 'Pham Trong Linh',
        dia_chi: 'Dong Hung, Thai Binh',
        so_dien_thoai: '07346573425',
        don_hang: 10,
    },
    {
        key: '4',
        ma_khach_hang: '90854',
        ten_khach_hang: 'Tran Minh Triet',
        dia_chi: 'Thanh Xuan, Ha Noi',
        so_dien_thoai: '0845473754',
        don_hang: 5,
    },
    {
        key: '5',
        ma_khach_hang: '09458',
        ten_khach_hang: 'Cao Van Tien',
        dia_chi: 'Thach That, Ha Noi',
        so_dien_thoai: '0947365634',
        don_hang: 9,
    },
    {
        key: '6',
        ma_khach_hang: '89847',
        ten_khach_hang: 'Trinh My Hanh',
        dia_chi: 'Dong Son, Thanh Hoa',
        so_dien_thoai: '0745365484',
        don_hang: 8,
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

function KhachHangContent() {
    const [checkStrictly, setCheckStrictly] = useState(false);

    const columns = [
        {
          title: 'Mã khách hàng',
          dataIndex: 'ma_khach_hang',
          key: 'ma_khach_hang',
        },
        {
          title: 'Tên khách hàng',
          dataIndex: 'ten_khach_hang',
          key: 'ten_khach_hang',
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'dia_chi',
          key: 'dia_chi', 
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'so_dien_thoai',
          key: 'so_dien_thoai',  
        },
        {
          title: 'Đơn hàng',
          dataIndex: 'don_hang',
          key: 'don_hang',
        },
        {
          title: 'Chức năng',
          render: (_, record) => (
            <div>
                <Button style={{backgroundColor: '#FFD9D9'}}><EditOutlined style={{color: '#D23B3B'}}/></Button>
                <Button style={{marginLeft: '5px', backgroundColor: '#D9D9D9'}}><DeleteOutlined /></Button>
            </div>
          )
        },
    ]

    return (
        <div>
            <div style={{width: '100%', height: '30px', border: '1px solid black'}}>
                <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Danh sách khách hàng</h3>
            </div>
            <div style={{paddingTop: '10px'}}>
                <Space size={[8, 16]} wrap>
                    <Link to={'/themkhachhang'}>
                    <Button type='primary'>Thêm khách hàng</Button>
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
                <h4 style={{paddingLeft: '20px',fontWeight: 'unset'}}>danh sách khách hàng</h4>
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

export default KhachHangContent