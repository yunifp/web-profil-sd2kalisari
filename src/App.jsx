import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Client Pages
import Home from './pages/Home';
import History from './pages/History';
import VisiMisi from './pages/VisiMisi';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Fasilitas from './pages/Fasilitas';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import Prestasi from './pages/Prestasi';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail'; // Import baru
import Login from './pages/Login';
import PPDB from './pages/PPDB';

// Admin Layout & Pages
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageBerita from './pages/admin/ManageBerita';
import ManagePPDB from './pages/admin/ManagePPDB';
import ManageEkstrakurikuler from './pages/admin/ManageEkstrakurikuler';
import ManagePrestasi from './pages/admin/ManagePrestasi';
import ManageVisiMisi from './pages/admin/ManageVisiMisi';
import ManageStruktur from './pages/admin/ManageStruktur';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/profil/sejarah" element={<History />} />
        <Route path="/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/profil/fasilitas" element={<Fasilitas />} />
        <Route path="/akademik/ekstrakurikuler" element={<Ekstrakurikuler />} />
        <Route path="/akademik/prestasi" element={<Prestasi />} />
        
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} /> {/* Route Detail */}
        
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="berita" element={<ManageBerita />} />
          <Route path="ppdb" element={<ManagePPDB />} />
          <Route path="ekstrakurikuler" element={<ManageEkstrakurikuler />} />
          <Route path="prestasi" element={<ManagePrestasi />} />
          <Route path="visi-misi" element={<ManageVisiMisi />} />
          <Route path="struktur" element={<ManageStruktur />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;