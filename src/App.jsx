import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ✅ Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndCondition'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Service = lazy(() => import('./pages/Service'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
import FloatingButtons from "./components/FloatingButtons"

const App = () => {
  return (
    <BrowserRouter>
    <FloatingButtons/>
      <Navbar />
      {/* ✅ Suspense shows fallback while components load */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Service />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/term&condition" element={<TermsAndConditions />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
