import {Inter} from 'next/font/google';
const inter = Inter({subsets: ['latin']});
import Navbar from './navbar';
import Footer from './footer';
import CustomHead from "@/components/head";
import styles from "@/styles/global.module.scss";
import TechnologyData from "@/data/Technology";

export default function Layout({children}) {
  return (
    <>
      <CustomHead/>

      <main className={`${styles.main} ${inter.className}`}>
        <Navbar/>

        <div className='mainContent'>{children}</div>

        <Footer/>
      </main>
    </>
  );
}