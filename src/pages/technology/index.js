import Layout from "@/components/layout";
import Accordion from "@/components/Accordion";
import GreenAccordion from "@/components/GreenAccordion";
import BlackAccordion from "@/components/BlackAccordion";
import Footer from "@/components/footer";
import CtaBlueButton from "@/components/ctaBlueButton";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageTechnology.module.scss';

export default function Technology() {

  return (
    <Layout className='pageTechnology'>

      <div className={`${page.pageTitle} _title`}>
        <span>TECHNOLOGY</span>
      </div>

      <div className={`${styles.technologySection} ${page.pageWrap}`}>
        <div className={styles.innerSection}>

          <div className={styles.blackLine}></div>

          <Accordion title="CORE COMPETENCIES" layout='fullContent' useArrow={false} isOpen={true}>
            <GreenAccordion prefixTitle='01.' title="PLATFORMS" layout='columnContent'>
              <p>Windows</p>
              <p>Android</p>
              <p>iOS</p>
              <p>Linux</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='02.' title="CLOUD" layout='columnContent'>
              <p>AWS</p>
              <p>Google Cloud</p>
              <p>Azure</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='03.' title="CONTINUOUS DELIVERY SOLUTIONS">
              <p>CI & CD Pipeline Construction</p>
              <p>Release Management Workflow setup</p>
              <p>Test Automation Integration</p>
              <p>Code Quality Control</p>
              <p>Search</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='04.' title="DEVOPS MONITORING SOLUTIONS">
              <p>Monitor Performance</p>
              <p>Optimize Infrastructure</p>
              <p>Notify of issues</p>
            </GreenAccordion>

            <GreenAccordion prefixTitle='05.' title="MICROSERVICES AND SERVERLESS COMPUTING">
              <p>Developing Microservices Architecture</p>
              <p>Code Refactoring</p>
              <p>Container Orchestration</p>
              <p>Cloud Native Development</p>
              <p>Automated Programmable Infrastructure</p>
              <p>Consolidate Hardware Resources</p>
            </GreenAccordion>
          </Accordion>

          <BlackAccordion title="SYSTEMS INTEGRATION" useArrow={false}>
            <div>
              <p>
              Many companies use different IT solutions for different tasks, but as business functions expand, they become overwhelmed by disjointed tools that can’t share data with each other.
              That’s why Systems Integration is so important to connect these different pieces of technology into a single ecosystem.</p>
            </div>

            <div>
              <p>Systems Integration involves <span className={page.yellowText}>connecting business software, applications, and databases together</span> so that data can be pushed and pulled between them. Businesses use many different
              systems for sales, accounting, inventory or fulfillment, but these systems don't always work together. System integration solves this problem by connecting different systems
                together.</p>
            </div>

            <div>
              <p>This allows businesses to automate tasks, like moving data between systems, getting notifications when certain things happen, and generating reports. By doing this, businesses can
                improve their performance, gain more insight into their operations, and make better decisions.</p>
            </div>

            <div>
              <p>System Integration can also help businesses use new technology without having to sunset their old systems, as well as connect to 3rd Party systems (such as PayPal to take
                payments). Businesses can even connect to other businesses like suppliers and retailers to have data flowing from end to end.</p>

              <div className='pad20'></div>
              <CtaBlueButton text='Learn More' link='/system-integration' />
            </div>
          </BlackAccordion>

        </div>
      </div>

      <Footer/>

    </Layout>
  )
}


