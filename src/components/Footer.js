import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brands">
        <span className="footer__brand">BMW</span>
        <span className="footer__brand">Mercedes-Benz</span>
      </div>
      <hr className="footer__divider" />
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} AutoMarket. Все права защищены.
      </p>
    </footer>
  );
}

export default Footer;
