import Image from 'next/image';
import styles from '@/styles/navbar.module.scss';
import React, {useState} from 'react';
import Link from 'next/link';

export default function Navbar() {

  // Toggle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('black');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      if (backgroundColor === 'black') {
        setBackgroundColor('blue');
      } else if (backgroundColor === 'blue') {
        setBackgroundColor('yellow');
      } else {
        setBackgroundColor('black');
      }
    }
  };

  return (
    <>
      <header className={`${styles[backgroundColor]} ${styles.header} ${isMenuOpen ? styles.open : styles.closed}`}>
        <div className={styles.logoContainer}>
          <a href='/' >
            <Image
              src="/images/logo.svg"
              alt="Lexim Global"
              className={styles.logoImg}
              width={23}
              height={23}
            />
          </a>
        </div>

        <div className={styles.menuBtn} onClick={toggleMenu}>
          <div className={`${styles.menuBar} ${styles.top}`}></div>
          <div className={`${styles.menuBar} ${styles.bottom}`}></div>
        </div>
      </header>

      <div className={`${styles.menuPanel} FontSui s48_120`}>
        <div className={styles.menuItem}>
          <a href='/about' >
            <span>ABOUT</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>

        <div className={styles.menuItem}>
          <a href='/technology' >
            <span>TECHNOLOGY</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>

        <div className={styles.menuItem}>
          <a href='/partnerships' >
            <span>PARTNERSHIPS</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>

        <div className={styles.menuItem}>
          <a href='/case-studies' >
            <span>CASE STUDIES</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>

        <div className={styles.menuItem}>
          <a href='/testimonials' >
            <span>TESTIMONIALS</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>

        <div className={styles.menuItem}>
          <a href='/contact' >
            <span>CONTACT</span>
            <div className={styles.bottomLine}></div>
          </a>
        </div>
      </div>
      {/* menuPanel */}

    </>
  );
}