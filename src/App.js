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
import FAQ from './pages/FAQ'; // ✅ New FAQ Page
import ScrollToTop from './pages/ScrollToTop';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-700">
          <Link to="/" className="text-2xl font-bold text-emerald-600 font-pacifico">TrideviTech</Link>
          <div className="flex gap-6 font-medium text-base">
            <Link to="/" className="hover:text-emerald-600 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-emerald-600 transition duration-300">About</Link>
            <Link to="/services" className="hover:text-emerald-600 transition duration-300">Services</Link>
            <a
              href="https://calendly.com/your-scheduling-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition duration-300"
            >
              Schedule a Call
            </a>
            <Link to="/contact" className="hover:text-emerald-600 transition duration-300">Contact</Link>
            <Link to="/faq" className="hover:text-emerald-600 transition duration-300">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/faq" element={<FAQ />} /> {/* ✅ FAQ route */}
          <Route path="/sonu" element={<Sonu />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Tridevi Tech LLC. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
