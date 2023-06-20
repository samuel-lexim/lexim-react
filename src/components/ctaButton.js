import styles from '@/styles/cta.module.scss';
import Image from "next/image";
import Head from "next/head";
import {useEffect} from "react";

export default function CtaButton(
  {
    text = 'Schedule a Call',
    link = '',
    className = '',
    target = '_self',
    contactForm = false
  }) {

  useEffect(() => {
    if (contactForm) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [contactForm]);

  const handleButtonClick = () => {
    if (contactForm) {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/lexim-support' });
      }
    }
  };

  return (
    <>
      {contactForm && (
        <Head>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        </Head>
      )}

      <div className={`${styles.ctaButton} ${className}`}>
        {link ? (
          <a className={styles.ctaLink} target={target} href={link}>
            <span className={styles.span}>{text}</span>
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
        ) : (
          <a className={styles.ctaLink} target={target} onClick={handleButtonClick}>
            <span className={styles.span}>{text}</span>
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
        )}
      </div>
    </>
  )
};