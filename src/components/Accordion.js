import React, {useState} from 'react';
import styles from '@/styles/accordion.module.scss';

const Accordion = ({
    title, children, className, layout ='',
    useArrow = true
  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.accordionWrap} ${className} ${styles[layout]} 
      ${isExpanded ? styles.expanded : styles.closed}`}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <span className={styles._heading}>{title}</span>
        {useArrow &&
          <svg className={styles.downArrow} width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 4.37114e-08L7 30L9 30L9 -4.37114e-08L7 4.37114e-08Z"
              fill="#000"/>
          </svg>
        }
      </div>
      {isExpanded && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

export default Accordion;