import React, {useEffect, useRef, useState} from 'react';
import Layout from "@/components/layout";
import GreenAccordion from "@/components/GreenAccordion";
import Footer from "@/components/footer";
import CtaBlueButton from "@/components/ctaBlueButton";
import PageTitle from "@/components/PageTitle";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageTechnology.module.scss';
import accordionStyle from '@/styles/accordion.module.scss';

import { useSwipeable } from 'react-swipeable';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import GreenTechnologyData from "@/data/GreenTechnology";

export default function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSystemsIntegrationOpen, setIsSystemsIntegrationOpen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));

    if (index === 1) { // tab SYSTEMS INTEGRATION
      // scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // Reset the slider to the first slide
      setIsSystemsIntegrationOpen(true);
      sliderRef.current.slickGoTo(0);
    } else {
      setIsSystemsIntegrationOpen(false);
    }
  };

  // START - Scroll slider
  const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    vertical: true,
    swipe: false,
    // verticalSwiping: false,
    // swipeToSlide: true,
  };

  const scrollableDivRef = useRef(null);
  const sliderRef = useRef(null); // Reference to the Slider component
  const [isMouseInside, setIsMouseInside] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => sliderRef.current.slickNext(),
    onSwipedDown: () => sliderRef.current.slickPrev(),
  });

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseInside(true);
      document.body.classList.add('scrollHidden'); // Disable global scroll
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      document.body.classList.remove('scrollHidden'); // Enable global scroll
    };

    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        // Scroll down
        sliderRef.current.slickNext(); // Go to the next slide
      } else if (delta < 0) {
        // Scroll up
        sliderRef.current.slickPrev(); // Go to the previous slide
      }
    }

    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.addEventListener('mouseenter', handleMouseEnter);
    scrollableDiv.addEventListener('mouseleave', handleMouseLeave);
    scrollableDiv.addEventListener('wheel', handleWheel);

    return () => {
      scrollableDiv.removeEventListener('wheel', handleWheel);
      scrollableDiv.removeEventListener('mouseenter', handleMouseEnter);
      scrollableDiv.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('scrollHidden');
    };
  }, []);
  // END - Scroll slider


  return (
    <Layout className='pageTechnology'>

      <PageTitle title='TECHNOLOGY'/>

      <div className={`${styles.technologySection} ${page.pageWrapLeft} ${page.pageWrapTop}`}>
        <div className={styles.innerSection}>
          <div className={styles.blackLine}></div>

          <div key={0}
               className={`
              ${accordionStyle.accordionWrap} ${accordionStyle['fullContent']} 
              ${0 === activeIndex ? accordionStyle.expanded : accordionStyle.closed}
          `}>
            <div className={accordionStyle.accordionHeader} onClick={() => toggleAccordion(0)}>
              <span className={`${accordionStyle._heading} s40_64 FontSui`}>CORE COMPETENCIES</span>
            </div>

            <div className={`${accordionStyle.accordionContent}`}>
              <GreenAccordion data={GreenTechnologyData}
                              activeIndex={activeIndex}
                              onAccordionToggle={toggleAccordion} />
            </div>
          </div>


          <div key={1}
            className={`${accordionStyle.accordionWrap} ${accordionStyle['normal']} ${accordionStyle.black}
            blackSlickSlider
            ${accordionStyle.accordionWrap} ${accordionStyle['fullContent']} 
            ${1 === activeIndex ? accordionStyle.expanded + ' expanded' : accordionStyle.closed}
          `}>
            <div className={accordionStyle.accordionHeader} onClick={() => toggleAccordion(1)}>
              <span className={`${accordionStyle._heading} s40_64 FontSui`}>SYSTEMS INTEGRATION</span>
            </div>

            <div ref={scrollableDivRef} className={`${accordionStyle.accordionContent} `}>
              <Slider
                {...settings}
                ref={sliderRef}
                className={isSystemsIntegrationOpen ? 'isOpened' : ''}
              >
                <div>
                  <p>
                    Many companies use different IT solutions for different tasks, but as business functions expand, they become overwhelmed by disjointed tools that can’t share data with each
                    other.
                    That’s why Systems Integration is so important to connect these different pieces of technology into a single ecosystem.</p>
                </div>

                <div>
                  <p>Systems Integration involves <span className={`${page.yellowText} fw-400`}>connecting business software, applications, and databases together</span> so that data can be pushed and pulled
                    between
                    them. Businesses use many different
                    systems for sales, accounting, inventory or fulfillment, but these systems don't always work together. System integration solves this problem by connecting different systems
                    together.</p>
                </div>

                <div>
                  <p>This allows businesses to automate tasks, like moving data between systems, getting notifications when certain things happen, and generating reports. By doing this, businesses
                    can
                    improve their performance, gain more insight into their operations, and make better decisions.</p>
                </div>

                <div>
                  <p>System Integration can also help businesses use new technology without having to sunset their old systems, as well as connect to 3rd Party systems (such as PayPal to take
                    payments). Businesses can even connect to other businesses like suppliers and retailers to have data flowing from end to end.</p>

                  <div className='pad20'></div>
                  <CtaBlueButton className='_fadeOutIn' text='Learn More' link='/system-integration'/>
                </div>
              </Slider>
            </div>
          </div>


        </div>
      </div>

      <Footer/>

    </Layout>
  )
}


