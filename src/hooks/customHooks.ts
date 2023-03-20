import { useState, useEffect } from 'react';

export const useMobile = (callback: VoidFunction) => {
  const [windowDimension, setWindowDimension] = useState(0);

  const isMobile = windowDimension <= 768;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    if (!isMobile) {
      callback();
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return { isMobile };
};
