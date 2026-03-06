import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RestaurantPage from './pages/RestaurantPage';
import SurroundingsPage from './pages/SurroundingsPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import HotelPage from './pages/HotelPage';
import OffersPage from './pages/OffersPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/chambres" element={<RoomsPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/environs" element={<SurroundingsPage />} />
            <Route path="/offres" element={<OffersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
