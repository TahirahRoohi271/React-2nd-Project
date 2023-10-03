import React from 'react';
import { useState, useEffect } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

  // Function to handle the click event on the navToggle button
  const handleNavToggle = () => {
    setShowMenu(true);
  };

  // Function to handle the click event on the navClose button
  const handleNavClose = () => {
    setShowMenu(false);
  };

  // Function to handle the click event on nav links and hide the menu
  const linkAction = () => {
    setShowMenu(false);
  };

  // Effect to change the background header on scroll
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-leaf-line nav__logo-icon"></i> Plantex
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">Products</a>
            </li>
            <li className="nav__item">
              <a href="#faqs" className="nav__link">FAQs</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
