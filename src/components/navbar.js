import Image from 'next/image'
import styles from '@/styles/navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo.svg"
          alt="Lexim Global"
          className={styles.logoImg}
          width={23}
          height={23}
        />
      </div>

      <div className="menuBtn">
        <div className="menu-bar top"></div>
        <div className="menu-bar bottom"></div>
      </div>

    </header>
  );
}