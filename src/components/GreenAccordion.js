import React, {useState, useEffect, useRef} from 'react';

import styles from '@/styles/greenAccordion.module.scss';

const GreenAccordion = ({
  data = [],
  prefixTitle = true,
  showContent = true,
  useArrow = true,
  activeIndex,
  onAccordionToggle,
}) => {
  const listRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(false);
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  // Update openIndex when activeIndex changes in parent component
  useEffect(() => {
    setOpenIndex(false);
  }, [activeIndex]);

  // Scroll to the current GreenAccordion when the current tab is opened
  useEffect(() => {
    if (openIndex && listRef.current[openIndex]) {
      const scrollOptions = {
        top: listRef.current[openIndex].offsetTop,
        behavior: 'smooth',
      };
      window.scrollTo(scrollOptions);
    }
  }, [openIndex]);

  return (
    <>
      {data.map((child, index) => (
        <div
          key={index}
          className={`${styles.accordionWrap} ${styles[child.layout]} 
            ${index === openIndex ? styles.expanded : styles.closed} 
            ${prefixTitle ? styles.hasPrefix : styles.noPrefix} 
            ${showContent ? styles.showContent : styles.emptyContent}`}
          ref={(el) => (listRef.current[index] = el)}
        >

          <div className={styles.accordionHeader}
               onClick={() => toggleAccordion(index)}
          >
            <div className={`${styles.headingContainer} `}>
              <span className={styles.prefixTitle}>{child.prefixTitle}</span>
              <h2 className={`${styles._heading} s40_64`} dangerouslySetInnerHTML={{__html: child.title}}></h2>
              {useArrow &&
                <svg className={styles.downArrow} width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 4.37114e-08L7 30L9 30L9 -4.37114e-08L7 4.37114e-08Z"
                    fill="#000"/>
                </svg>
              }
            </div>
          </div>

          {index === openIndex && (
            <div className={`${styles.accordionContent} s28_42`}
                 dangerouslySetInnerHTML={{__html: child.content}}
            ></div>
          )}
        </div>
      ))}
    </>
  );
};

export default GreenAccordion;