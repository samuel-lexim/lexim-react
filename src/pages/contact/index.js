import Layout from "@/components/layout";
import ReactFullPage from "@fullpage/react-fullpage";
import CtaBlueButton from "@/components/ctaBlueButton";
import PageTitle from "@/components/PageTitle";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageContact.module.scss';
import {useEffect} from "react";
import Footer from "@/components/footer";

export default function Contact() {


  // START - Run effect in the first time page load
  const initNotRunEffect = () => {
    const sections = document.querySelector('.section');
    setTimeout(() => {
      sections.classList.remove('initNotRunEffect');
    }, 600);
  };

  useEffect(() => {
    initNotRunEffect(); // Run the function only once after the component mounts
  }, []);
  // END - Run effect in the first time page load

  return (
    <Layout className='pageContact'>

      <PageTitle title='CONTACT'/>

      <div className={`${styles.fullPageSection} ${page.pageWrapLeft} section initNotRunEffect`}>

        <section className={`${styles.contactSection} `}>
          <div className={styles.innerSection}>
            <h2 className={`${styles.s40_64} _backInLeft  FontSui fw-500 lh-1`}>No problem is too big or small.</h2>
            <div className='pad20'></div>
            <h1 className={`${styles.s50_140} _backInRight FontSui fw-500 lh-1`}>We’re here to help</h1>
            <div className='pad20'></div>

            <div className={`${styles._content} lh-1`}>
              <div className={`_backInBottom`}>
                <p className='fw-500 s24_64 lh-1_2'>Book your free consult today.</p>
              </div>
              <div className='pad20'></div>
              <CtaBlueButton className='_fadeOutIn' contactForm={true} />
            </div>
          </div>

        </section>
      </div>

      <Footer />

    </Layout>
  )
}


