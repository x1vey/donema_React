import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLenis, useScrollReset } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();
  useScrollReset();

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <span id="top" />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}
