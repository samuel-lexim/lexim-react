import Layout from "@/components/layout";

// Docs: https://alvarotrigo.com/fullPage/docs/
import ReactFullPage from "@fullpage/react-fullpage";
import CtaBlueButton from "@/components/ctaBlueButton";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import PageTitle from "@/components/PageTitle";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageAbout.module.scss'
import {useEffect, useRef} from "react";


export default function About() {
  const sections = ['About0', 'About1', 'About2', 'About3', 'About4', 'About5', 'About6', 'About7'];

  // slider
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px'
        }
      },
    ]
  };

  // START - Run effect in the first time page load
  const initNotRunEffect = () => {
    const sections = document.querySelector('.fp-section');
    setTimeout(() => {
      sections.classList.remove('initNotRunEffect');
    }, 500);
  };

  useEffect(() => {
    initNotRunEffect(); // Run the function only once after the component mounts
  }, []);
  // END - Run effect in the first time page load

  // Create virtual buttons to click to scroll page
  const clickToScrollPage = (index) => {
    const fpNavLinks = document.querySelectorAll("#fp-nav a");
    if (fpNavLinks[index]) {
      fpNavLinks[index].click();
    }
  };

  return (
    <Layout className='pageAbout'>

      <PageTitle title='ABOUT'/>

      <ReactFullPage
        navigation={true}
        navigationPosition="right"
        render={({state, fullPageApi}) => {

          return (
            <div id='AboutFullPage'>
              <div className={`${styles.fullPageSection} section initNotRunEffect`} id={sections[0]} data-index={0}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection} ${page.pageWrapLeft}`}>
                  <div className={styles.innerSection}>
                    <Link href='/' className='_backInTop' scroll={true}>
                      <Image
                        src="/images/LEXIM.svg"
                        alt="Lexim Global"
                        className={styles.logoImg}
                        width={207}
                        height={48}
                      />
                    </Link>
                    <div className={`${styles.contentWrap} _backInBottom`}>

                      <ul className={styles.virtualNav}>
                        <li className={styles.activatedDot}><a onClick={() => clickToScrollPage(0)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(1)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(2)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(3)}><span></span></a></li>
                      </ul>

                      <div className={styles._rightContent}>
                        <p>Lexim offers innovative solutions for back-end software development with a focus on systems integration.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[1]} data-index={1}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection} ${page.pageWrapLeft}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} s46_120 _backInLeft FontSui`}>IT SOLUTIONS</h2>

                    <div className={`${styles.contentWrap} _backInRight`}>
                      <ul className={styles.virtualNav}>
                        <li><a onClick={() => clickToScrollPage(0)}><span></span></a></li>
                        <li className={styles.activatedDot}><a onClick={() => clickToScrollPage(1)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(2)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(3)}><span></span></a></li>
                      </ul>

                      <div className={styles._rightContent}>
                        <p className='fw-500'>Lexim offers innovative solutions for back-end software development with a focus on systems integration.</p>
                        <p className='fw-300'>We provide custom development that connects <span className={page.yellowHighlight}>ERP, OMS, and enterprise e-commerce</span>. You’ll be surprised at how
                          quickly we work, often delivering projects ahead of schedule, and how affordable we are for any size budget.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[2]} data-index={2}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection} ${page.pageWrapLeft}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} s46_120 _backInRight FontSui`}>OUR CLIENTS</h2>

                    <div className={`${styles.contentWrap} _backInLeft`}>
                      <ul className={styles.virtualNav}>
                        <li><a onClick={() => clickToScrollPage(0)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(1)}><span></span></a></li>
                        <li className={styles.activatedDot}><a onClick={() => clickToScrollPage(2)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(3)}><span></span></a></li>
                      </ul>

                      <div className={styles._rightContent}>
                        <p className='fw-300'>Our clients range <span className='fw-500'>from startups to Fortune 500s</span> in <span className={`${page.blueText} fw-500 `}>media, fashion, consumer, lifestyle, finance,
                        consumer electronics, government, international business, travel/hospitality</span>, and more.</p>
                      </div>
                    </div>

                    <div className='pad20'></div>

                    <div className={`${styles.ourCustomers}`}>
                      <div className={`${styles.customerItem} _slideRightToLeft`} style={{'transition-delay': '0.5s'}}>
                        <Link href='https://www.silverts.com'>
                          <Image
                            src="/images/customers/silverts.png"
                            alt='Adaptive Clothing for Seniors, Elderly & Disabled  - Silverts'
                            width={194} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} style={{'transition-delay': '1s'}}>
                        <Link href='https://www.intertrend.com'>
                          <Image
                            src="/images/customers/intertrend.png"
                            alt='A multicultural agency that understands the intersection of culture, emerging trends, and the interaction between brands and consumers'
                            width={230} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} style={{'transition-delay': '1.5s'}}>
                        <Link href='https://www.heartsoulscrubs.com'>
                          <Image
                            src="/images/customers/heartsoul.png"
                            alt='Cute Scrubs for Women | Heartsoul Scrubs'
                            width={160} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} style={{'transition-delay': '2s'}}>
                        <Link href='https://www.infinityscrubs.com'>
                          <Image
                            src="/images/customers/infinity.png"
                            alt='Infinity Scrubs - Modern Medical Uniforms for Women & Men by Cherokee'
                            width={139} height={70}
                          />
                        </Link>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[3]} data-index={3}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection} ${page.pageWrapLeft}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} s46_120 _backInLeft FontSui`}>LOS ANGELES</h2>

                    <div className={`${styles.contentWrap}`}>
                      <ul className={styles.virtualNav}>
                        <li><a onClick={() => clickToScrollPage(0)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(1)}><span></span></a></li>
                        <li><a onClick={() => clickToScrollPage(2)}><span></span></a></li>
                        <li className={styles.activatedDot}><a onClick={() => clickToScrollPage(3)}><span></span></a></li>
                      </ul>

                      <div className={styles._rightContent}>
                        <div className={`_backInRight`}>
                          <p className='fw-300'>Our Executive HQ is in Los Angeles, and we have development centers in Danang, Vietnam.</p>
                          <p className='fw-300'>Our name, <span className='fw-700'>Lexim, means "a vast storehouse of language"</span> and we aim to help businesses thrive in the tech-driven global
                            economy.</p>
                        </div>
                        <div className='pad40'></div>
                        <CtaBlueButton className='_fadeOutIn' text='Contact Us' link='/contact'/>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[4]} data-index={4}>
                <section className={`${styles.aboutSection} ${styles.flexEnd} `}>
                  <Footer/>
                </section>
              </div>

            </div>
          );
        }}
      />

    </Layout>
  )
}


