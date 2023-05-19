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
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[0]} data-index={0}>
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
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[1]} data-index={1}>
                  <div className={styles.innerSection}>
                    <div className={styles.content}>
                      <p>Our team <span className={page.blueText}>integrates systems, connects front-end to back-end, and streamlines your business with automation</span> to move at the pace of your
                        customers.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[2]} data-index={2}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>And we do</h3>
                      <p className='h2'>a lot more than that…</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[3]} data-index={3}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>We focus on:</h3>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[4]} data-index={4}>
                  <div className={styles.homeHeading}>
                    <h3>Here’s how we’ll plan your project:</h3>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[5]} data-index={5}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>Let’s plan your project:</h3>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <section className={`${page.sectionScroll} ${styles.homeSection}`} id={sections[6]} data-index={6}>
                  <div className={styles.innerSection}>
                    <div className={styles.homeHeading}>
                      <h3>Let’s plan your project:</h3>
                    </div>
                  </div>
                </section>
              </div>

              <div className='section'>
                <Footer />
              </div>

            </div>
          );

        }}
      />


    </Layout>
  )
}
