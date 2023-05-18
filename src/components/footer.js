import 'animate.css';
import styles from '@/styles/footer.module.scss';
import CtaButton from "@/components/ctaButton";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaWrap}>
        <div>
          <CtaButton text='SEND A MESSAGE' />
          <CtaButton text='EMAIL: hello@lexim.tech' link='mailto: hello@lexim.tech' target='_blank' />
          <CtaButton text='SCHEDULE A CALL' />
        </div>
      </div>

      <div className={styles.brandWrap}>
        <span>LEXIM</span>
      </div>

      <div className={`${styles.copyrightWrap}`}>
        <span>Copyright (c)2023 LEXIM</span>
      </div>
    </footer>
  );
}