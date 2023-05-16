import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/global.module.scss";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}