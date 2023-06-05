import Layout from "@/components/layout";
import {useEffect} from "react";
import styles from '@/styles/home.module.scss';
import page from '@/styles/page.module.scss';
import CtaBlueButton from "@/components/ctaBlueButton";

// Docs: https://alvarotrigo.com/fullPage/docs/
import ReactFullPage from "@fullpage/react-fullpage";

import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const sections = ['Home0', 'Home1', 'Home2', 'Home3', 'Home4', 'Home5', 'Home6', 'Home7'];

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

  return (
    <Layout className='pageHome'>

      <ReactFullPage
        render={({state}) => {

          return (
            <div id='fullPage' className='fw-500'>
              <div className={`${styles.fullPageSection} section initNotRunEffect`} data-index={0}>
                <div className={styles.lineHome}>
                  <span className={`${styles._lineTop} _lineTopEffect`}></span>
                  <span className={`${styles._lineBottom} _lineBottomEffect`}></span>
                </div>
                <section className={` ${styles.homeSection}`}
                         id={sections[0]} data-index={0}>
                  <div className={styles.innerSection}>
                    <h3 className='_backInTop lh-1_05'>Let’s reduce your operation costs by integrating your software.</h3>
                    <h2 className={`${styles.mainHeading} _backInLeft FontSui`}>We Can Help</h2>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn} _backInBottom`}>
                        <p>We’d love to talk about your product, your situation, and ways we can help you.</p>
                        <p>All without a fee.</p>
                        <CtaBlueButton text='Schedule a Call' link='/contact'/>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={1}>
                <div className={styles.lineHome}>
                  <span className={`${styles._lineLeft} _lineLeftEffect`}></span>
                  <span className={`${styles._lineRight} _lineRightEffect`}></span>
                </div>

                <section className={` ${styles.homeSection}`}
                         id={sections[1]} data-index={1}>
                  <div className={`${styles.innerSection} _backInLeft`}>
                    <div className={`${styles.content} `}>
                      <p>Our team <span className={page.blueText}>integrates systems, connects front-end to back-end, and streamlines your business with automation
                        </span> to move at the pace of your customers.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={2}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[2]} data-index={2}>
                  <div className={styles.innerSection}>
                    <div className={`${styles.homeHeading} FontSui`}>
                      <h3 className='_backInRight'>And we do</h3>
                      <h2 className={`${styles._underLine} _underLineEffect _backInLeft`}>a lot more than that…</h2>
                    </div>

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

              <div className={`${styles.fullPageSection} section`} data-index={3}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[3]} data-index={3}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={`${styles._underLine} _underLineEffect _backInLeft FontSui`}>We focus on:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn} _backInBottom`}>
                        <p><Link href='/#'><span>Systems Integration</span></Link></p>
                        <p><Link href='/#'><span>Order Management Systems</span></Link></p>
                        <p><Link href='/#'><span>ERP Customization</span></Link></p>
                        <p><Link href='/#'><span>Enterprise E-Commerce</span></Link></p>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={4}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[4]} data-index={4}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={`${styles._underLine} _underLineEffect _backInLeft FontSui`}>Here’s how we’ll<br/> plan your project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn} _backInBottom`}>
                        <p>1. We’ll understand your challenges</p>
                        <p>2. Scope the project</p>
                        <p>3. And build a team that’s customized for your specific needs</p>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={5}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[5]} data-index={5}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={`${styles._underLine} _underLineEffect _backInLeft FontSui`}>Let’s plan your<br/> project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={`${styles.leftColumn} _backInLeft`}>
                        <p>What to expect:</p>
                      </div>
                      <div className={`${styles.rightColumn} _backInRight`}>
                        <p>1. Thoughtful questions</p>
                        <p>2. A thorough outline of the constraints and considerations</p>
                        <p>3. An experienced point of view</p>
                      </div>
                    </div>

                    <CtaBlueButton link='/contact' className={`${styles._absolute} _rotateButton`}/>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={6}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[6]} data-index={6}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={`${styles._underLine} _underLineEffect FontSui`}>Let’s plan your<br/> project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}>
                        <p className='_backInLeft'>What not to expect:</p>
                      </div>
                      <div className={styles.rightColumn}>
                        <p className='_backInRight'>1. An invoice for our conversation</p>
                        <p className='_backInRight'>2. Empty promises without a timeline</p>
                      </div>
                    </div>

                    <CtaBlueButton link='/contact' className={`${styles._absolute} _rotateButton`}/>

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
