import './App.css';
import Forgotpassword from './pages/forgotpassword';
import Home from './pages/home';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';
import PhanQuyen from './pages/PhanQuyen';
import DonHang from './pages/DonHang';
import KhachHang from './pages/KhachHang';
import SanPham from './pages/SanPham';
import ThongKe from './pages/ThongKe';
import ThemsanphamContent from './components/ThemsanphamContent';
import ThemSanPham from './pages/ThemSanPham';
import ThemNhanVien from './pages/ThemNhanVien';
import ThemKhachHang from './pages/ThemKhachHang';
import ThemkhachhangContent from './components/ThemkhachhangContent';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />
          <Route path='/phan-quyen' element={<PhanQuyen />} />
          <Route path='/don-hang' element={<DonHang />} />
          <Route path='/khach-hang' element={<KhachHang />} />
          <Route path='/san-pham' element={<SanPham />} />
          <Route path='/thong-ke' element={<ThongKe />} />
          <Route path='/themsanpham' element={<ThemSanPham />} />
          <Route path='/themkhachhang' element={<ThemKhachHang />} />
          <Route path='/themnhanvien' element={<ThemNhanVien />} />
        </Routes>
    </div>
  );
}

export default App;
