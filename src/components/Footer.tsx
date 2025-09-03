import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} None. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;