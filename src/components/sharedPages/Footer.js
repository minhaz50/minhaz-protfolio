import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-10 bg-cyan-900 text-base-content">
        <div>
          <p>Copyright © {currentYear} - Md Minhaz Uddin</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
