// import AboutData from '@/data/About';
import Layout from "@/components/layout";
import ReactFullPage from "@fullpage/react-fullpage";
import CtaBlueButton from "@/components/ctaBlueButton";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageAbout.module.scss'

export default function About() {

  const sections = ['About0', 'About1', 'About2', 'About3', 'About4', 'About5', 'About6', 'About7'];

  return (
    <Layout className='pageAbout'>

      <div className={`${page.pageTitle} _title`}>
        <span>ABOUT</span>
      </div>

      <ReactFullPage
        navigation={true}
        navigationPosition="left"
        render={({state, fullPageApi}) => {

          return (
            <div id='fullPage'>

              <div className={`${styles.fullPageSection} section`} id={sections[0]} data-index={0}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection}`}>
                  <div className={styles.innerSection}>
                    <Link href='/' className='_backInTop'>
                      <Image
                        src="/images/LEXIM.svg"
                        alt="Lexim Global"
                        className={styles.logoImg}
                        width={207}
                        height={48}
                      />
                    </Link>
                    <div className={`${styles._content} _backInBottom`}>
                      <p>Lexim offers innovative solutions for back-end software development with a focus on systems integration.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[1]} data-index={1}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} _backInLeft FontSui`}>IT SOLUTIONS</h2>

                    <div className={`${styles._content} _backInRight`}>
                      <p className='fw-500'>Lexim offers innovative solutions for back-end software development with a focus on systems integration.</p>
                      <p className='fw-300'>We provide custom development that connects <span className={page.yellowHighlight}>ERP, OMS, and enterprise e-commerce</span>. You’ll be surprised at how
                        quickly we work, often delivering projects ahead of schedule, and how affordable we are for any size budget.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} id={sections[2]} data-index={2}>
                <div className={styles.aboutLine}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={`${styles.aboutSection}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} _backInRight FontSui`}>OUR CLIENTS</h2>

                    <div className={`${styles._content} _backInLeft`}>
                      <p className='fw-300'>Our clients range <span className='fw-500'>from startups to Fortune 500s</span> in <span className={`${page.blueText} fw-500 `}>media, fashion, consumer, lifestyle, finance,
                        consumer electronics, government, international business, travel/hospitality</span>, and more.</p>
                    </div>

                    <div className='pad20'></div>

                    <div className={`${styles.ourCustomers} _rotateFromBottom`}>
                      <div className={styles.customerItem}>
                        <Link href='https://www.silverts.com'>
                          <Image
                            src="/images/customers/silverts.jpg"
                            alt='Adaptive Clothing for Seniors, Elderly & Disabled  - Silverts'
                            width={227} height={53}
                          />
                        </Link>
                      </div>

                      <div className={styles.customerItem}>
                        <Link href='https://www.intertrend.com'>
                          <Image
                            src="/images/customers/intertrend.jpg"
                            alt='A multicultural agency that understands the intersection of culture, emerging trends, and the interaction between brands and consumers'
                            width={227} height={57}
                          />
                        </Link>
                      </div>

                      <div className={styles.customerItem}>
                        <Link href='https://www.heartsoulscrubs.com'>
                          <Image
                            src="/images/customers/heartsoul.jpg"
                            alt='Cute Scrubs for Women | Heartsoul Scrubs'
                            width={155} height={65}
                          />
                        </Link>
                      </div>

                      <div className={styles.customerItem}>
                        <Link href='https://www.infinityscrubs.com'>
                          <Image
                            src="/images/customers/infinity.jpg"
                            alt='Infinity Scrubs - Modern Medical Uniforms for Women & Men by Cherokee'
                            width={135} height={65}
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

                <section className={`${styles.aboutSection}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`${styles._heading} _backInLeft FontSui`}>LOS ANGELES</h2>

                    <div className={`${styles._content}`}>
                      <div className={`_backInRight`}>
                        <p className='fw-300'>Our Executive HQ is in Los Angeles, and we have development centers in Danang, Vietnam and soon in Seoul, Korea.</p>
                        <p className='fw-300'>Our name, <b>Lexim, means "a vast storehouse of language"</b> and we aim to help businesses thrive in the tech-driven global economy.</p>
                      </div>
                      <div className='pad40'></div>
                      <CtaBlueButton className='_rotateButton' text='Contact Us' link='#'/>
                    </div>
                  </div>
                </section>

                <Footer/>

              </div>

            </div>
          );
        }}
      />

    </Layout>
  )
}


