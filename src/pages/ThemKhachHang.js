import React from 'react'
import ThemkhachhangContent from '../components/ThemkhachhangContent'
import Home from './home'

function ThemKhachHang() {
  return <Home children={<ThemkhachhangContent />} link={'themkhachhang'} />
}

export default ThemKhachHang