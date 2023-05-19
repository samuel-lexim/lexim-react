import styles from '@/styles/cta.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function CtaBlueButton(
  {
    text = 'Schedule a Call',
    link = '#',
    className = '',
    blue = false,
    target = '_self'
  }
) {
  return (
    <>
      <div className={`${styles.ctaButton} ${styles.blueButton} ${className}`}>
        <Link className={styles.ctaLink} href={link} target={target}>
          <div className={styles.ctaLinkInner}>
            <span>{text}</span>
            <div className={styles.bottomLine}></div>
            <div className={styles.arrow}>
              <Image
                src="/images/arrow-white.svg"
                alt={text}
                width={23}
                height={17}
                priority
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};