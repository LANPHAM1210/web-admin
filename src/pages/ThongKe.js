import React from 'react'
import ThongKeContent from '../components/ThongkeContent'
import Home from './home'

export default function ThongKe() {
  return <Home children={<ThongKeContent />} link={'thong-ke'} />
}
