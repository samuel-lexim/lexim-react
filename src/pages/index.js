import Layout from "@/components/layout";
import {useEffect, useState} from "react";
import styles from '@/styles/home.module.scss';
import page from '@/styles/page.module.scss';
import CtaBlueButton from "@/components/ctaBlueButton";
import TypingEffect from '@/components/TypingEffect';

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

  // Typing Effect
  const [typingStarted, setTypingStarted] = useState(false);

  return (
    <Layout className='pageHome'>

      <ReactFullPage
        afterLoad={(origin, destination, direction, trigger) => {
          console.log('direction ' + direction);
          console.log('trigger ' + trigger);

          if (origin.index === 1) {
            setTypingStarted(false);
            console.log("origin.index === 1");
          }

          if (destination.index === 1) {
            setTypingStarted(true);
            console.log("destination.index === 1");
          }
        }}

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
                    <h3 className={`s40_64 _backInTop lh-1_05 `}>Let’s reduce your operation costs by integrating your software.</h3>
                    <h2 className={`s50 _backInLeft FontSui`}>We Can Help</h2>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn} _backInBottom`}>
                        <p>We’d love to talk about your product, your situation, and ways we can help you.</p>
                        <p>All without a fee.</p>
                        <CtaBlueButton className='_fadeOutIn' text='Schedule a Call' contactForm={true}/>
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
                  <div className={`${styles.innerSection} _backInLeft22`}>
                    <div className={`${styles.content} `}>

                      {typingStarted &&
                      <>
                        <p>
                          <TypingEffect start={typingStarted} text='Our team ' />
                          <TypingEffect start={typingStarted} classText={page.blueText} after={360} text='integrates systems, connects front-end to back-end, and streamlines your business with automation ' />
                          <TypingEffect start={typingStarted} after={4180} text='to move at the pace of your customers.' />
                        </p>
                      </>
                      }

                    </div>
                  </div>
                </section>
              </div>

              <div className={`${styles.fullPageSection} section`} data-index={2}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[2]} data-index={2}>
                  <div className={styles.innerSection}>
                    <div className={`${styles.homeHeading} FontSui`}>
                      <h3 className={`s40_100 _backInRight`}>And we do</h3>
                      <h2 className={`s50_140 ${styles._underLine} _underLineEffect _backInLeft`}>a lot more than that…</h2>
                    </div>

                    <div className={`${styles.ourCustomers}`}>

                      <div className={`${styles.customerItem} _slideRightToLeft`} data-index={0} style={{'transition-delay':'0.5s'}}>
                        <Link href='https://www.silverts.com' scroll={false}>
                          <Image
                            src="/images/customers/silverts.png"
                            alt='Adaptive Clothing for Seniors, Elderly & Disabled  - Silverts'
                            width={194} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} data-index={1} style={{'transition-delay':'1s'}}>
                        <Link href='https://www.intertrend.com' scroll={false}>
                          <Image
                            src="/images/customers/intertrend.png"
                            alt='A multicultural agency that understands the intersection of culture, emerging trends, and the interaction between brands and consumers'
                            width={230} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} data-index={2} style={{'transition-delay':'1.5s'}}>
                        <Link href='https://www.heartsoulscrubs.com' scroll={false}>
                          <Image
                            src="/images/customers/heartsoul.png"
                            alt='Cute Scrubs for Women | Heartsoul Scrubs'
                            width={160} height={70}
                          />
                        </Link>
                      </div>

                      <div className={`${styles.customerItem} _slideRightToLeft`} data-index={3} style={{'transition-delay':'2s'}}>
                        <Link href='https://www.infinityscrubs.com' scroll={false}>
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

              <div className={`${styles.fullPageSection} section`} data-index={3}>
                <section className={` ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[3]} data-index={3}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={`s50 ${styles._underLine} _underLineEffect _backInLeft FontSui`}>We focus on:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn}`}>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'0.5s'}}>
                          <Link href={''} scroll={false}><span>Systems Integration</span></Link></p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1s'}}>
                          <Link href={''} scroll={false}><span>Order Management Systems</span></Link></p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1.5s'}}>
                          <Link href={''} scroll={false}><span>ERP Customization</span></Link></p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'2s'}}>
                          <Link href={''} scroll={false}><span>Enterprise E-Commerce</span></Link></p>
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
                      <h3 className={`s50 ${styles._underLine} _underLineEffect _backInLeft FontSui`}>
                        Here’s how we’ll<br/> plan your project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={`${styles.rightColumn}`}>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'0.5s'}}>
                          1. We’ll understand your challenges</p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1s'}}>
                          2. Scope the project</p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1.5s'}}>
                          3. And build a team that’s customized for your specific needs</p>
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
                      <h3 className={`s50 ${styles._underLine} _underLineEffect _backInLeft FontSui`}>Let’s plan your<br/> project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={`${styles.leftColumn} _backInLeft`}>
                        <p className='s28_42'>What to expect:</p>
                      </div>
                      <div className={`${styles.rightColumn}`}>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'0.5s'}}>
                          1. Thoughtful questions</p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1s'}}>
                          2. A thorough outline of the constraints and considerations</p>
                        <p className='_slideBottomToTop s28_42' style={{'transition-delay':'1.5s'}}>
                          3. An experienced point of view</p>
                      </div>
                    </div>

                    <CtaBlueButton contactForm={true} className={`${styles._absolute} _fadeOutIn`}/>
                  </div>
                </section>

              </div>

              <div className={`${styles.fullPageSection} section`} data-index={6}>
                <section className={`${styles.homeSection} ${styles.flexEnd} `} id={sections[6]} data-index={6}>
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
