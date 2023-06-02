import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/blackAccordion.module.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const BlackAccordion = ({
    children, className, title,
    layout = 'normal', // columnContent
    prefixTitle = false,
    showContent = true,
    useArrow = true
  }) => {

  // Toggle
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  // End - Toggle

  // Scroll slider
  const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    // vertical: true,
  };
  const scrollableDivRef = useRef(null);
  const sliderRef = useRef(null); // Reference to the Slider component
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseInside(true);
      document.body.classList.add('scrollHidden') ; // Disable global scroll
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      document.body.classList.remove('scrollHidden'); // Enable global scroll
    };

    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        // Scroll down
        sliderRef.current.slickNext(); // Go to the next slide
      } else if (delta < 0) {
        // Scroll up
        sliderRef.current.slickPrev(); // Go to the previous slide
      }
    }

    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.addEventListener('mouseenter', handleMouseEnter);
    scrollableDiv.addEventListener('mouseleave', handleMouseLeave);
    scrollableDiv.addEventListener('wheel', handleWheel);

    return () => {
      scrollableDiv.removeEventListener('wheel', handleWheel);
      scrollableDiv.removeEventListener('mouseenter', handleMouseEnter);
      scrollableDiv.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('scrollHidden');
    };
  }, []);


  return (
    <div className={`${styles.accordionWrap} ${styles[layout]} blackSlickSlider
        ${isExpanded ? styles.expanded : styles.closed} 
        ${prefixTitle ? styles.hasPrefix : styles.noPrefix} 
        ${showContent ? styles.showContent : styles.emptyContent}
        ${isExpanded && showContent ? styles.openedContent : styles.closedContent } 
        `}>

      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <div className={`${styles.headingContainer} `}>
          <span className={styles.prefixTitle}>{prefixTitle}</span>
          <h2 className={`${styles._heading}`}>{title}</h2>
          {useArrow &&
            <svg className={styles.downArrow} width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 4.37114e-08L7 30L9 30L9 -4.37114e-08L7 4.37114e-08Z"
                fill="#fff"/>
            </svg>
          }
        </div>
      </div>

      <div ref={scrollableDivRef} className={styles.accordionContent}>
        <Slider {...settings} ref={sliderRef}>
        {children}
        </Slider>
      </div>

    </div>
  );
};

export default BlackAccordion;