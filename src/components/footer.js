import styles from '@/styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaWrap}>
        <p className={styles.ctaLine}>SEND A MESSAGE</p>
        <p className={styles.ctaLine}>EMAIL: hello@lexim.tech</p>
        <p className={styles.ctaLine}>SCHEDULE A CALL</p>
      </div>

      <div className={styles.brandWrap}>
        <p>LEXIM</p>
      </div>

      <div className={styles.copyrightWrap}>
        <p>Copyright (c)2023 LEXIM</p>
      </div>
    </footer>
  );
}