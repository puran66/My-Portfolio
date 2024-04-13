import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import OpeningPage from '../OpeningPage/OpeningPage';

const AnimationWrapper = ({ children }) => {
  useEffect(() => {
    // GSAP animation
    gsap.from('.main', {
      opacity: 0,
      duration: 2,
      delay: 2, // Delay before disappearing
      onComplete: () => {
        // After animation completes, hide the container
        gsap.set('.main', { display: 'none' });
      }
    });
  }, []);

  return (
    <div className="main">
      <OpeningPage/>
      {children}
    </div>
  );
};

export default AnimationWrapper;
