import React from 'react'
import SanphamContent from '../components/SanPhamContent'
import Home from './home'

export default function SanPham() {
  return <Home children={<SanphamContent />} link={'san-pham'} />
}
