import Layout from "@/components/layout";
import styles from '@/styles/home.module.scss';
import TechnologyData from "@/data/Technology";


export default function Home() {
  return (
    <Layout>
      {/* TechnologyData List */}
      {TechnologyData.map((item, index) => {
        return (
          <div className="blueText" key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </Layout>
  )
}
