

import React, { useState } from 'react'
import { Button, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { defaultConfig } from 'antd/es/theme/internal';

const dataSource = [
    {
        key: '1',
        ma_nhan_vien: '7834564',
        ten_nhan_vien: 'Pham Minh Huu',
        anh: 'link',
        email: 'pmh374@gmail.com',
        username: 'Minh Huu',
        mat_khau: '73465734', 
    },
    {
        key: '2',
        ma_nhan_vien: '8346553',
        ten_nhan_vien: 'Hoang Minh Tuan',
        anh: 'link',
        email: 'hmt475@gmail.com',
        username: 'Minh Tuan',
        mat_khau: '73465734',
    },
    {
        key: '3',
        ma_nhan_vien: '3857483',
        ten_nhan_vien: 'Tran Tuan An',
        anh: 'link',
        email: 'tta9845@gmail.com',
        username: 'Tuan An',
        mat_khau: '73465734',
    },
    {
        key: '4',
        ma_nhan_vien: '4968563',
        ten_nhan_vien: 'Pham Tuan Dinh Anh',
        anh: 'link',
        email: 'ptda8374@gmail.com',
        username: 'Dinh Anh',
        mat_khau: '73465734',
    },
    {
        key: '5',
        ma_nhan_vien: '385776',
        ten_nhan_vien: 'Nguyen Gia Bao',
        anh: 'link',
        email: 'ngb0937@gmail.com',
        username: 'Gia Bao',
        mat_khau: '73465734',
    },
    {
        key: '6',
        ma_nhan_vien: '7826473',
        ten_nhan_vien: 'Pham Huu An',
        anh: 'link',
        email: 'pha146@gmail.com',
        username: 'Huu An',
        mat_khau: '73465734',
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

function PhanQuyenContent() {
    const [checkStrictly, setCheckStrictly] = useState(false);

    const columns = [
        {
          title: 'Mã nhân viên  ',
          dataIndex: 'ma_nhan_vien',
          key: 'ma_nhan_vien',
        },
        {
          title: 'Tên nhân viên',
          dataIndex: 'ten_nhan_vien',
          key: 'ten_nhan_vien',
        },
        {
          title: 'Ảnh',
          dataIndex: 'anh',
          key: 'anh',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email', 
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username', 
          },
        {
          title: 'Mật khẩu',
          dataIndex: 'mat_khau',
          key: 'mat_khau',  
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
                <h3 style={{fontWeight: 'unset', paddingLeft: '10px'}}>Nhượng quyền nhân viên</h3>
            </div>
            <div style={{paddingTop: '10px'}}>
                <Space size={[8, 16]} wrap>
                    <Link to={'/themnhanvien'}>
                    <Button type='primary'>Thêm nhân viên</Button>
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
                <h4 style={{paddingLeft: '20px',fontWeight: 'unset'}}>danh sách nhân viên</h4>
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

export default PhanQuyenContent