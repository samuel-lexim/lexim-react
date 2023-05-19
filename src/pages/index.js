import Layout from "@/components/layout";
import styles from '@/styles/home.module.scss';
import page from '@/styles/page.module.scss';
import CtaButton from "@/components/ctaButton";
import CtaBlueButton from "@/components/ctaBlueButton";

import ReactFullPage from "@fullpage/react-fullpage"; // Docs: https://alvarotrigo.com/fullPage
import Footer from "@/components/footer";

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
              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`}
                         id={sections[0]} data-index={0}>
                  <div className={styles.innerSection}>
                    <h4>Let’s reduce your operation costs by integrating your software.</h4>
                    <h2 className={`${styles.mainHeading}`}>We Can Help</h2>
                    <div className={styles.content}>
                      <p>We’d love to talk about your product, your situation, and ways we can help you.</p>
                      <CtaBlueButton text='Schedule a Call' link='//google.com'/>
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
                      <h3 className='h2'>a lot more than that…</h3>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[3]} data-index={3}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>We focus on:</h3>
                    </div>

                    <div className={styles.content}>
                      <p>Systems Integration</p>
                      <p>Order Management Systems</p>
                      <p>ERP Customization</p>
                      <p>Enterprise E-Commerce</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[4]} data-index={4}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>Here’s how we’ll plan your project:</h3>
                    </div>

                    <div className={styles.content}>
                      <p>1. We’ll understand your challenges</p>
                      <p>2. Scope the project</p>
                      <p>3. And build a team that’s customized for your specific needs</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[5]} data-index={5}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>Let’s plan your project:</h3>
                    </div>

                    <p>What to expect:</p>

                    <div className={styles.content}>
                      <p>1. Thoughtful questions</p>
                      <p>2. A thorough outline of the constraints and considerations</p>
                      <p>3. An experienced point of view</p>
                    </div>

                    <CtaBlueButton href='#'/>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection} ${styles.headingUnderLine}`}
                         id={sections[6]} data-index={6}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>Let’s plan your project:</h3>
                    </div>

                    <p>What not to expect:</p>

                    <div className={styles.content}>
                      <p>1. An invoice for our conversation</p>
                      <p>2. Empty promises without a timeline</p>
                    </div>

                    <CtaBlueButton href='#'/>

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
