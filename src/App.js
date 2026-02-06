import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ServicePage from './pages/ServicePage';
import CreditPage from './pages/CreditPage';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/credit" element={<CreditPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
