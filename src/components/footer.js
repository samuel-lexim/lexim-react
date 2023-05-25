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
          <CtaButton text='SEND A MESSAGE' />
          <CtaButton text='EMAIL: hello@lexim.tech' link='mailto: hello@lexim.tech' target='_blank' />
          <CtaButton text='SCHEDULE A CALL' />
        </div>
      </div>

      <div className={styles.brandWrap}>
        <Link href='/'>
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
        <span>Copyright (c)2023 LEXIM</span>
      </div>
    </footer>
  );
}