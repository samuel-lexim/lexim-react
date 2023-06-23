import 'animate.css';
import styles from '@/styles/footer.module.scss';
import CtaButton from "@/components/ctaButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className={`${styles.footer} FontSui`}>
      <div className={styles.ctaWrap}>
        <div>
          <CtaButton text='SEND A MESSAGE' contactForm={true} />
          <CtaButton text='EMAIL: hello@lexim.tech' link='mailto: hello@lexim.tech' target='_blank' />
          <CtaButton text='SCHEDULE A CALL' contactForm={true} />
        </div>
      </div>

      <div className={styles.brandWrap}>
        <Link href='/' scroll={true}>
          <Image
            src="/images/LEXIM.svg"
            alt="Lexim Global"
            className={styles.logoImg}
            width={177}
            height={41}
          />
        </Link>
      </div>

      <div className={`${styles.copyrightWrap}`}>
        <span>Copyright &#169; 2023 LEXIM</span>
      </div>
    </footer>
  );
}