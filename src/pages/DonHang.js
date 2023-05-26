import React from 'react'
import DonHangContent from '../components/DonHangContent'
import Home from './home'

function DonHang() {
  return <Home children={<DonHangContent />} link={'don-hang'} />
}

export default DonHang