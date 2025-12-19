import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import VisiMisi from './pages/VisiMisi';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Fasilitas from './pages/Fasilitas';
import GuruStaff from './pages/GuruStaff';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import Prestasi from './pages/Prestasi';

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
        <Route path="/" element={<Home />} />
        
        <Route path="/profil/sejarah" element={<History />} />
        <Route path="/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/profil/fasilitas" element={<Fasilitas />} />
        <Route path="/profil/guru-staf" element={<GuruStaff />} />
        
        <Route path="/akademik/ekstrakurikuler" element={<Ekstrakurikuler />} />
        <Route path="/akademik/prestasi" element={<Prestasi />} />
      </Routes>
    </Router>
  );
}

export default App;