import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Amazon Clone — Demo</div>
    </footer>
  );
}
