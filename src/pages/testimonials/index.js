import Layout from "@/components/layout";
import CtaBlueButton from "@/components/ctaBlueButton";
import Footer from "@/components/footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import page from '@/styles/page.module.scss';
import styles from '@/styles/pageTestimonials.module.scss';

export default function Testimonials() {
  // slider
  const settings = {
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <Layout className='pageTestimonials'>

      <div className={`${page.pageTitle} _title`}>
        <span>TESTIMONIALS</span>
      </div>

      <div className={`${styles.testimonialsWrap}`}>

        <section className={`${styles.testimonialsSection}`}>

          <div className={styles.statistical}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statText}>Customers Served</span>
          </div>
          <div className={styles.statistical}>
            <span className={styles.statNumber}>150</span>
            <span className={styles.statText}>Systems Integrations</span>
          </div>
          <div className={styles.statistical}>
            <span className={styles.statNumber}>3 months</span>
            <span className={styles.statText}>Average Project Completion</span>
          </div>
          <div className={styles.statistical}>
            <span className={styles.statNumber}>30%</span>
            <span className={styles.statText}>Average Increase In Sales</span>
          </div>

          <Slider {...settings} className={styles.testimonialSlider}>
            <div className={styles.testimonial}>
              <div className={`${styles._content} fw-300 lh-1_1`}>
                <p>“<span className='fw-700'>InterTrend</span> is a global advertising agency with comprehensive creative, broadcast, and print capabilities. Their innovative commercials and online
                  video campaigns are recognized worldwide for their impact and effectiveness. With the support of LEXIM, Intertrend not only built a stunning agency website, but also custom mobile
                  apps to enhance their client partnerships. Intertrend highly recommends Lexim for any of your web or mobile app needs.”</p>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={`${styles._content} fw-300 lh-1`}>
                <p><span className='fw-700'>Silverts Adaptive Clothing & Footwear</span> is a leader in adaptive apparel designed to support caregivers, elderly, families and nursing homes.</p>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={`${styles._content} fw-300 lh-1`}>
                <p><span className='fw-700'>Infinity Scrubs</span> is designed for active, luxurious functionality in the medical profession. It's products expands to nurses and medical staff
                  worldwide. </p>
                <div className='pad20'></div>
                <p><span className='fw-700'>HeartSoul Scrubs</span> is a sibling brand of Infinity Scrubs. It also provides top-grade medical apparel for those in the professional field. </p>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={`${styles._content} fw-300 lh-1`}>
                <p><span className='fw-700'>Teletron USA Luxury & Lifestyle</span> is a business for various products that consist of electronics and appliances that advocate for a luxurious lifestyle
                  of comfort and quality.</p>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={`${styles._content} fw-300 lh-1`}>
                <p><span className='fw-700'>Cherokee Brazil</span> is a blog web page created for Cherokee Uniforms, that support dual languages in Portuguese and English.</p>
                <div className='pad20'></div>
                <p><span className='fw-700'>Cherokee Uniforms</span> is apparel that serves comfort and quality, and a leading manufacture of medical uniforms across multiple brands.</p>
              </div>
            </div>
          </Slider>

        </section>

      </div>

      <Footer/>


    </Layout>
  )
}


