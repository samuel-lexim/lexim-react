import Layout from "@/components/layout";
import Accordion from "@/components/Accordion";
import GreenAccordion from "@/components/GreenAccordion";
import BlackAccordion from "@/components/BlackAccordion";
import Footer from "@/components/footer";
import React, { useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import page from '@/styles/page.module.scss';
import styles from '@/styles/pageTechnology.module.scss';



export default function Technology() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true
  };

  return (
    <Layout className='pageTechnology'>

      <div className={`${page.pageTitle} _title`}>
        <span>TECHNOLOGY</span>
      </div>

      <div className={`${styles.technologySection} ${page.pageWrap}`}>
        <div className={styles.innerSection}>

          <div className={styles.blackLine}></div>

          <Accordion title="CORE COMPETENCIES" layout='fullContent' useArrow={false}>
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


            <Slider {...settings}>
              <div className={`section`}>
                <div>Many companies use different IT solutions for different tasks, but as business functions expand, they become overwhelmed by disjointed tools that can’t share data with each other.
                  That’s why Systems Integration is so important to connect these different pieces of technology into a single ecosystem.
                </div>
              </div>

              <div className={`section`}>
                <div>Systems Integration involves connecting business software, applications, and databases together so that data can be pushed and pulled between them. Businesses use many different
                  systems for sales, accounting, inventory or fulfillment, but these systems don't always work together. System integration solves this problem by connecting different systems
                  together.
                </div>
              </div>

              <div className={`section`}>
                <div>This allows businesses to automate tasks, like moving data between systems, getting notifications when certain things happen, and generating reports. By doing this, businesses can
                  improve their performance, gain more insight into their operations, and make better decisions.
                </div>
              </div>

              <div className={`section`}>
                <div>System Integration can also help businesses use new technology without having to sunset their old systems, as well as connect to 3rd Party systems (such as PayPal to take
                  payments). Businesses can even connect to other businesses like suppliers and retailers to have data flowing from end to end.
                </div>
              </div>
            </Slider>

          </BlackAccordion>

        </div>
      </div>

      <Footer/>

    </Layout>
  )
}


