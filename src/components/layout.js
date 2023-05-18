import Navbar from "@/components/navbar";
import styles from "@/styles/global.module.scss";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}