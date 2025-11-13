import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Zambeel Dropshipping', href: '#!' },
      { label: 'Zambeel 3PL', href: '#!' },
      { label: 'Zambeel 360', href: '#!' },
    ],
  },
  {
    title: 'Zambeel Portal',
    links: [
      { label: 'Sign Up', href: '#!' },
      { label: 'Sign In', href: '#!' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: 'zambeel@help.com', href: 'mailto:zambeel@help.com' },
      { label: '+92 331 0090291', href: 'tel:+923310090291' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">Zambeel</div>
          <p className="footer__description">
            Zambeel helps businesses grow with reliable dropshipping, fulfillment, and 3PL solutions. Sell smarter, scale faster, and reach new markets with ease.
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((group) => (
            <div key={group.title} className="footer__column">
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Zambeel. All rights reserved.</span>
        <div className="footer__social">
          <a href="#!" aria-label="Facebook">Fb</a>
          <a href="#!" aria-label="LinkedIn">In</a>
          <a href="#!" aria-label="Instagram">Ig</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

