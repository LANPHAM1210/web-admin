import React from 'react'
import KhachHangContent from '../components/KhachHangContent'
import Home from './home'

export default function KhachHang() {
  return <Home children={<KhachHangContent />} link={'khach-hang'} />
}
