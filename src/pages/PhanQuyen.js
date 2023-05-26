import React from 'react'
import PhanQuyenContent from '../components/PhanQuyenContent'
import Home from './home'

function PhanQuyen() {
  return <Home children={<PhanQuyenContent />} link={'phan-quyen'} />
}

export default PhanQuyen