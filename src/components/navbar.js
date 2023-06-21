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
          <Link href='/' scroll={false}>
            <Image
              src="/images/logo.svg"
              alt="Lexim Global"
              className={styles.logoImg}
              width={23}
              height={23}
            />
          </Link>
        </div>

        <div className={styles.menuBtn} onClick={toggleMenu}>
          <div className={`${styles.menuBar} ${styles.top}`}></div>
          <div className={`${styles.menuBar} ${styles.bottom}`}></div>
        </div>
      </header>

      <div className={`${styles.menuPanel} FontSui s48_120`}>
        <div className={styles.menuItem}>
          <Link href='/about' scroll={false}>
            <span>ABOUT</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link href='/technology' scroll={false}>
            <span>TECHNOLOGY</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link href='/partnerships' scroll={false}>
            <span>PARTNERSHIPS</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link href='/case-studies' scroll={false}>
            <span>CASE STUDIES</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link href='/testimonials' scroll={false}>
            <span>TESTIMONIALS</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link href='/contact' scroll={false}>
            <span>CONTACT</span>
            <div className={styles.bottomLine}></div>
          </Link>
        </div>
      </div>
      {/* menuPanel */}

    </>
  );
}