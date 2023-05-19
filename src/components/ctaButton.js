import styles from '@/styles/cta.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function CtaButton(
  {
    text = 'Schedule a Call',
    link = '#',
    className = '',
    target = '_self'
  }) {
  return (
    <>
      <div className={`${styles.ctaButton} ${className}`}>
        <Link className={styles.ctaLink} href={link} target={target}>
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
        </Link>
      </div>
    </>
  )
};