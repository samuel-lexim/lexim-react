import React, {useState, useEffect, useRef} from 'react';
import styles from '@/styles/accordion.module.scss';

const Accordion = ({
   data = [],
   className, layout = '',
   useArrow = true
}) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const headerRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (activeIndex !== false && headerRefs.current[activeIndex]) {
      const scrollOptions = {
        top: headerRefs.current[activeIndex].offsetTop - 60, // menu height = 60px
        behavior: 'smooth',
      };
      window.scrollTo(scrollOptions);
    }
  }, [activeIndex]);

  return (
    <>
      {data.map((child, index) => (
        <div key={index}
             className={`${styles.accordionWrap} ${className} ${styles[layout]} 
            ${index === activeIndex ? styles.expanded : styles.closed}`}
        >
          <div className={styles.accordionHeader}
               onClick={() => toggleAccordion(index)}
               ref={(el) => (headerRefs.current[index] = el)}
          >
            <span className={`${styles._heading} s40_64 FontSui`}>{child.title}</span>
            {useArrow &&
              <svg className={styles.downArrow} width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 4.37114e-08L7 30L9 30L9 -4.37114e-08L7 4.37114e-08Z"
                  fill="#000"/>
              </svg>
            }
          </div>
          {index === activeIndex && (
            <div className={`${styles.accordionContent}`}
                 dangerouslySetInnerHTML={{__html: child.content}}
            ></div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;