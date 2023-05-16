import Layout from "@/components/layout";
import AboutData from '@/data/About';
import AboutCss from '@/styles/pageAbout.module.scss'


export default function About(children) {
  return (
    <Layout>

      {/* About List */}
      {AboutData.map((item, index) => {
        return (
          <div className={AboutCss.greenText} key={index}>
            <h2 className="blueText">{item.title}</h2>
            <p className={AboutCss.blueText}>{item.content}</p>
          </div>
        );
      })}

    </Layout>
  )
}

// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       AboutData
//     }
//   }
// }

