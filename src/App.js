import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sonu from './pages/Sonu';
import SaaS from './pages/SaaS';
import Marketing from './pages/Marketing';
import Ecommerce from './pages/Ecommerce';
import Consultation from './pages/Consultation';
import FAQ from './pages/FAQ';
import ScrollToTop from './pages/ScrollToTop';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';
import { initGA, logPageView } from './analytics';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-700">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-transparent-png.png"
            alt="TrideviTech Logo"
            role="img"
            className="h-14 w-auto object-contain"
          />
          <span className="text-xl font-bold text-emerald-600 font-pacifico">
            
          </span>
        </Link>

        <div className="hidden md:flex gap-6 font-medium text-base">
          <Link to="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link to="/about" className="hover:text-emerald-600 transition">About</Link>
          <Link to="/services" className="hover:text-emerald-600 transition">Services</Link>
          <Link to="/contact" className="hover:text-emerald-600 transition">Contact</Link>
          <Link to="/faq" className="hover:text-emerald-600 transition">FAQ</Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 font-medium text-gray-700 text-base">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    initGA();
    logPageView();
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <header>
        <Navbar />
      </header>

      <main className="min-h-screen bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sonu" element={<Sonu />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      </main>

      <footer className="bg-gray-50 border-t text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Tridevi Tech LLC. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
