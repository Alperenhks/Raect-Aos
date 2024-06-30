// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useScrollAnimation = (options = {}) => {
  const { duration = 800, easing = 'ease-in-out', once = true } = options;

  useEffect(() => {
    AOS.init({
      duration,
      easing,
      once,
    });

    return () => {
      AOS.refresh();
    };
  }, [duration, easing, once]);
};

export default useScrollAnimation;
