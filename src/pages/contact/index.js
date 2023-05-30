import Layout from "@/components/layout";
import ReactFullPage from "@fullpage/react-fullpage";
import CtaBlueButton from "@/components/ctaBlueButton";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageContact.module.scss';

export default function Contact() {

  return (
    <Layout className='pageContact'>

      <div className={`${page.pageTitle} _title`}>
        <span>CONTACT</span>
      </div>

      <ReactFullPage
        render={({state, fullPageApi}) => {

          return (
            <div id='fullPage'>
              <div className={`${styles.fullPageSection} section`} data-index={0}>

                <section className={`${styles.contactSection}`}>
                  <div className={styles.innerSection}>
                    <h2 className={`_backInLeft h4 FontSui fw-300 lh-1`}>No problem is too big or small.</h2>
                    <div className='pad20'></div>
                    <h1 className={`_backInRight FontSui fw-500 lh-1`}>We’re here to help</h1>
                    <div className='pad20'></div>


                    <div className={`${styles._content} lh-1`}>
                      <div className={`_backInBottom`}>
                        <p className='fw-300 h4 '>Book your free consult today.</p>
                      </div>
                      <div className='pad20'></div>
                      <CtaBlueButton className='_rotateButton' text='Schedule a Call' link='#'/>
                    </div>
                  </div>

                </section>

              </div>

            </div>

        );
        }}
      />


    </Layout>
  )
}


