import Layout from "@/components/layout";
import styles from '@/styles/home.module.scss';
import page from '@/styles/page.module.scss';
import CtaBlueButton from "@/components/ctaBlueButton";

import ReactFullPage from "@fullpage/react-fullpage"; // Docs: https://alvarotrigo.com/fullPage
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const [sectionIndex, setSectionIndex] = useState(0);
  const sections = ['Home0', 'Home1', 'Home2', 'Home3', 'Home4', 'Home5', 'Home6', 'Home7'];

  return (
    <Layout>

      {/*<div className={'pageTitle'}><span>HOME</span></div>*/}

      <ReactFullPage
        render={({state, fullPageApi}) => {

          return (
            <div id='fullPage'>
              <div className={`${styles.fullPageSection} section`}>
                <div className={styles.lineHome1}>
                  <span className={`${styles._lineTop} _lineTopEffect`}></span>
                  <span className={`${styles._lineBottom} _lineBottomEffect`}></span>
                </div>
                <section className={`${page.sectionScroll} ${styles.homeSection}`}
                         id={sections[0]} data-index={0}>
                  <div className={styles.innerSection}>
                    <h4>Let’s reduce your operation costs by integrating your software.</h4>
                    <h2 className={`${styles.mainHeading}`}>We Can Help</h2>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={styles.rightColumn}>
                        <p>We’d love to talk about your product, your situation, and ways we can help you.</p>
                        <p>All without a fee.</p>
                        <CtaBlueButton text='Schedule a Call' link='//google.com'/>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`}
                         id={sections[1]} data-index={1}>
                  <div className={styles.innerSection}>
                    <div className={styles.content}>
                      <p>Our team <span className={page.blueText}>integrates systems, connects front-end to back-end, and streamlines your business with automation
                        </span> to move at the pace of your customers.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[2]} data-index={2}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h4>And we do</h4>
                      <h3 className={styles._underLine}>a lot more than that…</h3>
                    </div>

                    <div className={styles.ourCustomers}>

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

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[3]} data-index={3}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={styles._underLine}>We focus on:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={styles.rightColumn}>
                        <p><Link href='/#'><span>Systems Integration</span></Link></p>
                        <p><Link href='/#'><span>Order Management Systems</span></Link></p>
                        <p><Link href='/#'><span>ERP Customization</span></Link></p>
                        <p><Link href='/#'><span>Enterprise E-Commerce</span></Link></p>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[4]} data-index={4}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={styles._underLine}>Here’s how we’ll<br/> plan your project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}></div>
                      <div className={styles.rightColumn}>
                        <p>1. We’ll understand your challenges</p>
                        <p>2. Scope the project</p>
                        <p>3. And build a team that’s customized for your specific needs</p>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[5]} data-index={5}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={styles._underLine}>Let’s plan your<br/> project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}>
                        <p>What to expect:</p>
                      </div>
                      <div className={styles.rightColumn}>
                        <p>1. Thoughtful questions</p>
                        <p>2. A thorough outline of the constraints and considerations</p>
                        <p>3. An experienced point of view</p>
                      </div>
                    </div>

                    <CtaBlueButton href='#' className={styles._absolute}/>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[6]} data-index={6}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3 className={styles._underLine}>Let’s plan your<br/> project:</h3>
                    </div>

                    <div className={styles.content2Cols}>
                      <div className={styles.leftColumn}>
                        <p>What not to expect:</p>
                      </div>
                      <div className={styles.rightColumn}>
                        <p>1. An invoice for our conversation</p>
                        <p>2. Empty promises without a timeline</p>
                      </div>
                    </div>

                    <CtaBlueButton href='#' className={styles._absolute}/>

                  </div>
                </section>
              </div>

              <div className='section'>
                <Footer/>
              </div>

            </div>
          );

        }}
      />


    </Layout>
  )
}
