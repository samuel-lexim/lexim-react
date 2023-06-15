import Layout from "@/components/layout";
import CtaBlueButton from "@/components/ctaBlueButton";
import PageTitle from "@/components/PageTitle";
import Footer from "@/components/footer";

import styles from '@/styles/pageSystemIntegraion.module.scss';

export default function SystemIntegration() {

  return (
    <Layout className='pageSystemIntegration'>

      <PageTitle title='SYSTEM INTEGRATION'/>

      <div className={`${styles.systemWrap}`}>
        <section className={`${styles.systemSection}`}>
          <div className={`${styles.leftPadding} ${styles.noPadInXs}`}>
            <p className='s24_30'>According to Gartner, data is the most valuable commodity available to organizations, and increasing access to good quality data enables operational improvement,
              better insight into
              performance, and improved decision making.</p>
            <p className='s24_30'>The issue many organizations face is the lack of synchronization between the different systems that produce data, whether for sales, accounting, marketing,
              production, or distribution.
              When there is an app for everything, an organization might have a dozen apps that don’t communicate with each other.</p>
          </div>

          <div className={styles._pad4}></div>

          <div className='s34_42'>
            <h3 className={styles.h3Heading}>That’s where Lexim comes in.<br/>Lexim specializes in the most common types of systems integration:</h3>
            <div className={styles.leftPadding}>
              <h3 className={styles.blueH3}>Legacy system integration</h3>
              <h3 className={styles.blueH3}>Enterprise application integration</h3>
              <h3 className={styles.blueH3}>Third party system integration</h3>
              <h3 className={styles.blueH3}>Business to business integration</h3>
            </div>
          </div>

          <div className={styles._pad1}></div>
          <div className={styles.grayBg}></div>

          <div className={styles._pad3}></div>

          <div className='s34_42'>
            <h3 className={styles.h3Heading}>We also offer several different ways to connect systems:</h3>
            <div className={styles.leftPadding}>
              <h3 className={styles.blueH3}>Application programming interfaces (APIs)</h3>
              <h3 className={styles.blueH3}>Middleware</h3>
              <h3 className={styles.blueH3}>Webhooks</h3>
              <h3 className={styles.blueH3}>Electronic data interchange (EDIs)</h3>
            </div>
          </div>

          <div className={styles._pad3}></div>

          <div className='s34_42'>
            <h3 className={styles.h3Heading}>Our expert team can coordinate with yours to stand up any framework, including:</h3>
            <h3 className={styles.blueH3}>Point to Point</h3>
            <div className={styles.grayBg}></div>
            <div className={styles._pad1}></div>
            <h3 className={styles.blueH3}>Hub and spoke</h3>
            <div className={styles.grayBg}></div>
            <div className={styles._pad1}></div>
            <h3 className={styles.blueH3}>Enterprise Service Bus (ESB)</h3>
            <div className={styles.grayBg}></div>
          </div>

          <div className={styles._pad3}></div>

          <div className='s34_42'>
            <h3 className={`${styles.h3Heading}`}>Here are the key steps to system integration we offer, in conjunction with your web development team, marketing, and IT.</h3>
          </div>
          <div className={styles._pad1}></div>
          <div className={styles.leftPadding}>
            <p className='s34_42'>1. Planning and feasibility analysis</p>
            <p className='s34_42'>2. Architecture modeling</p>
            <p className='s34_42'>3. Implementation</p>
            <p className='s34_42'>4. Maintenance</p>

            <div className={styles._pad2}></div>

            <p className='s24_42'>Our tailored services for systems integration include configuration, data migration, custom development, training, and ongoing support to ensure our clients are fully
              utilizing each
              platform to its fullest potential.</p>
            <div className={styles._pad1}></div>
            <p className='s24_42'>We understand that each business has unique needs, and we take the time to understand those needs to provide a customized systems integration experience.</p>
            <div className={styles._pad1}></div>
            <CtaBlueButton className='_fadeOutIn' text='Contact Us' link='/contact'/>
          </div>
        </section>

        <div className={styles._pad4}></div>

      </div>

      <Footer/>

    </Layout>
  )
}


