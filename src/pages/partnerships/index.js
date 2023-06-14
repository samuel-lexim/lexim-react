import Layout from "@/components/layout";
import Accordion from "@/components/Accordion";
import Footer from "@/components/footer";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pagePartnerships.module.scss';

export default function Partnerships() {

  return (
    <Layout className='pagePartnerships'>

      <div className={`${page.pageTitle} _title`}>
        <span>PARTNERSHIPS</span>
      </div>

      <div id='fullPage'>

        <div className={`${styles.partnerSection} ${page.pageWrap}`}>
          <div className={styles.innerSection}>

            <div className={styles.blackLine}></div>

            <Accordion title="SALESFORCE">
              <p>Lexim is a leading provider of Salesforce Commerce Cloud and ERP onboarding services for businesses. Our team of experts has extensive experience in helping businesses of all sizes smoothly transition to ERP systems, including Salesforce Commerce Cloud. Our goal is to make the ERP implementation process as seamless as possible, ensuring our clients’ business operations continue uninterrupted. With our tailored onboarding services, businesses can get up and running on their chosen ERP platform in no time, while also taking advantage of all its powerful features. Our services include configuration, data migration, custom development, training, and ongoing support to ensure our clients are fully utilizing the platform to its fullest potential. Let us help you make the switch to an ERP system today and streamline your business operations for optimal success.</p>
            </Accordion>

            <Accordion title="ORACLE NETSUITE">
              <p>Discover a world of streamlined business operations with Lexim. We're your go-to experts for a seamless transition to Oracle NetSuite and other leading ERP systems. Our team of seasoned professionals has a passion for helping businesses just like yours realize their full potential. We understand that moving to an ERP system can be a complex and time-consuming process, which is why we're dedicated to making the journey as smooth as possible. With our customized onboarding services, you'll be up and running on Oracle NetSuite in no time, unlocking the platform's full range of features and benefits. From configuration and data migration, to custom development, training, and ongoing support, we've got you covered every step of the way. Embrace the future of business efficiency and make the switch to Oracle NetSuite today with Lexim.</p>
            </Accordion>

            <Accordion title="MAGENTO">
              <p>Lexim is a leading provider of Magento e-commerce platform onboarding services for businesses. Our team of experts has extensive experience in helping businesses of all sizes smoothly transition to Magento, ensuring that our clients' business operations continue uninterrupted. Our goal is to make the onboarding process as seamless as possible, enabling businesses to get up and running on the Magento platform in no time, while also taking advantage of all its powerful features.</p>
              <br/>
              <p>Whether you're just starting out with e-commerce or looking to upgrade your existing system, let Lexim help you make the switch to Magento and streamline your business operations for optimal success. Our commitment to excellence and customer satisfaction means that you can trust us to provide top-notch service every step of the way.</p>
            </Accordion>

            <div className={styles.blackLine}></div>
            <div className={styles.blackLine}></div>


          </div>
        </div>

        <Footer/>

      </div>

    </Layout>
  )
}


