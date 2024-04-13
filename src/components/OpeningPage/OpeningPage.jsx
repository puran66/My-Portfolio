import React, { useEffect, useRef } from 'react'
import entrylogo from '../../images/entry-logo.png';
import './OpeningPage.css'
import { gsap } from 'gsap';

const OpeningPage = ({ onAnimationComplete }) => {
  const openingRef = useRef(null);

  useEffect(() => {
    gsap.from(openingRef.current, {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        // Call the onAnimationComplete callback when animation completes
        onAnimationComplete();
      }
    });
  }, [onAnimationComplete]);
  return (
    <div className="opening-page">
      <img src={entrylogo} alt="entry-logo" className="entry-logo" />
      <h2 className="wellcome">Wellcome</h2>
    </div>
  )
}

export default OpeningPage