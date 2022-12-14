import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';
import { links, SocialBar } from './links';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksListRef = useRef(null);

  // Heigth of linksContainer in mobile view
  useEffect(() => {
    const linksListHeight =
      linksListRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current.style.height = `${linksListHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [show]);
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <h4>DevBar</h4>
        </div>
        <button
          className="btn nav-toggler"
          onClick={() => setShow(!show)}
        >
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="nav-links" ref={linksListRef}>
          {links.map((el) => {
            return (
              <li key={el.id}>
                <a href={el.url} alt={el.text}>
                  {el.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
