import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useMenu } from '../../hooks/useMenu';

const Header = React.memo(() => {
  const { toggleMenu, closeMenu } = useMenu();
  const { pathname } = useLocation();
  const [isAlt, setIsAlt] = useState(pathname === '/');

  useEffect(() => {
    const isHomePage = pathname === '/';

    if (!isHomePage) {
      setIsAlt(false);
      return undefined;
    }

    const syncHeaderState = () => {
      const banner = document.getElementById('banner');
      const header = document.getElementById('header');

      if (!banner || !header) {
        setIsAlt(false);
        return;
      }

      const threshold = banner.offsetHeight - header.offsetHeight - 1;
      setIsAlt(window.scrollY <= Math.max(threshold, 0));
    };

    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });
    window.addEventListener('resize', syncHeaderState);

    return () => {
      window.removeEventListener('scroll', syncHeaderState);
      window.removeEventListener('resize', syncHeaderState);
    };
  }, [pathname]);

  return (
    <>
      <header id="header" className={isAlt ? 'alt' : ''}>
        <h1><Link to="/" onClick={closeMenu}>Gig Wewu Website</Link></h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a href="#menu" className="menuToggle" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                <span>Menu</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {createPortal(
        <div id="menu" onClick={(e) => e.stopPropagation()}>
          <a href="#menu" className="close" onClick={(e) => { e.preventDefault(); closeMenu(); }}></a>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/generic" onClick={closeMenu}>Generic</Link></li>
            <li><Link to="/elements" onClick={closeMenu}>Elements</Link></li>
            <li><Link to="/mankada" onClick={closeMenu}>මංකඩ</Link></li>
            <li><Link to="/thawulla" onClick={closeMenu}>තාවුල්ල</Link></li>
            <li><Link to="/wae-kandiya" onClick={closeMenu}>වෑ කණ්ඩිය</Link></li>
            <li><Link to="/waew-thanawima" onClick={closeMenu}>වැව් තැනවීම</Link></li>
            <li><Link to="/waweka-mahima" onClick={closeMenu}>වැවෙක මහිම</Link></li>
            <li><Link to="/europiya-wartha" onClick={closeMenu}>යුරෝපීය වාර්තා</Link></li>
            <li><Link to="/waew-namawaliya" onClick={closeMenu}>වැව් නාමාවලිය</Link></li>
            <li><Link to="/pin-panduru" onClick={closeMenu}>පිං පඬුරු</Link></li>
            <li><Link to="/jathiyata-shasanayata" onClick={closeMenu}>ජාතිය ට ශාසනය ට</Link></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); }}>Sign Up</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); }}>Log In</a></li>
          </ul>
        </div>,
        document.body
      )}
    </>
  );
});

Header.displayName = 'Header';

export default Header;
