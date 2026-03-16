import { useState, useCallback, useEffect } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isMenuOpen) {
        const menu = document.getElementById('menu');
        const toggle = document.querySelector('.menuToggle');
        
        if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
          closeMenu();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);
  // Add/remove class to body for CSS
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('is-menu-visible');
    } else {
      document.body.classList.remove('is-menu-visible');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('is-menu-visible');
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  };
};