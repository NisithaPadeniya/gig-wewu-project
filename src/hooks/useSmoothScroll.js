import { useEffect, useCallback } from 'react';

const easeInOutCubic = (t) => {
  if (t < 0.5) {
    return 4 * t * t * t;
  }

  return 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const useSmoothScroll = (offset = 0, duration = 1500) => {
  const getOffset = useCallback(() => {
    return typeof offset === 'function' ? offset() : offset;
  }, [offset]);

  const scrollToElement = useCallback((elementId) => {
    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    const startPosition = window.scrollY;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = Math.max(elementPosition - getOffset(), 0);
    const travelDistance = targetPosition - startPosition;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + travelDistance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [duration, getOffset]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          const elementId = href.substring(1);
          scrollToElement(elementId);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [scrollToElement]);

  return { scrollToElement };
};
