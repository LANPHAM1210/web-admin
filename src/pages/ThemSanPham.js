import React from 'react'
import ThemsanphamContent from '../components/ThemsanphamContent'
import Home from './home'

function ThemSanPham() {
  return <Home children={<ThemsanphamContent />} link={'themsanpham'} />
}

export default ThemSanPham