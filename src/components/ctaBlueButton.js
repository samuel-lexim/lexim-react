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
            <span className='s26_42 fw-500'>{text}</span>
            <div className={styles.bottomLine}></div>
            <div className={styles.arrow}>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.5 2C34.5 1.17157 33.8284 0.5 33 0.499999L19.5 0.500001C18.6716 0.499999 18 1.17157 18 2C18 2.82843 18.6716 3.5 19.5 3.5L31.5 3.5L31.5 15.5C31.5 16.3284 32.1716 17 33 17C33.8284 17 34.5 16.3284 34.5 15.5L34.5 2ZM3.06066 34.0607L34.0607 3.06066L31.9393 0.939339L0.93934 31.9393L3.06066 34.0607Z" fill="#fff"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};