import styles from '@/styles/cta.module.scss';
import Image from "next/image";

export default function CtaBlueButton(
  {
    text = 'Schedule a Call',
    link = '#',
    blue = false,
    target = '_self'
  }
) {
  return (
    <>
      <div className={`${styles.ctaButton} ${styles.blueButton} `}>
        <a className={styles.ctaLink} href={link} target={target}>
          <span>{text}</span>
          <div className={styles.bottomLine}></div>
          <div className={styles.arrow}>
            <Image
              src="/images/arrow.svg"
              alt={text}
              width={23}
              height={17}
              priority
            />
          </div>
        </a>
      </div>
    </>
  )
};