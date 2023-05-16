import CustomHead from "@/components/head";
import Image from 'next/image';
import {Inter} from 'next/font/google';
const inter = Inter({subsets: ['latin']});

import styles from '@/styles/home.module.scss';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TechnologyData from "@/data/Technology";


const metaData = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
};

export default function Home() {
  return (
    <>
      <CustomHead/>

      <main className={`${styles.main} ${inter.className}`}>
        <Navbar/>

        {/* About List */}
        {TechnologyData.map((item, index) => {
          return (
            <div className="blueText" key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}

        <Footer/>
      </main>
    </>
  )
}
