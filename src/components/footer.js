import 'animate.css';
import styles from '@/styles/footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaWrap}>
        <div>
          <div>
            <a className={styles.ctaLink} href={`#`}>
              <span>SEND A MESSAGE</span>
              <div className={styles.bottomLine}></div>
              <div className={styles.arrow}>
                <Image
                  src="/images/arrow.svg"
                  alt="SEND A MESSAGE"
                  width={23}
                  height={17}
                  priority
                />
              </div>
            </a>
          </div>

          <div>
            <a className={styles.ctaLink} href={`#`}>
              <span>EMAIL: hello@lexim.tech</span>
              <div className={styles.bottomLine}></div>
              <div className={styles.arrow}>
                <Image
                  src="/images/arrow.svg"
                  alt="SEND A MESSAGE"
                  width={23}
                  height={17}
                  priority
                />
              </div>
            </a>
          </div>

          <div>
            <a className={styles.ctaLink} href={`#`}>
              <span>SCHEDULE A CALL</span>
              <div className={styles.bottomLine}></div>
              <div className={styles.arrow}>
                <Image
                  src="/images/arrow.svg"
                  alt="SEND A MESSAGE"
                  width={23}
                  height={17}
                  priority
                />
              </div>
            </a>
          </div>
        </div>
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