import React from 'react'
import ThemnhanvienContent from '../components/ThemnhanvienContent'
import Home from './home'

function ThemNhanVien() {
  return <Home children={<ThemnhanvienContent />} link={'themsanpham'} />
}

export default ThemNhanVien