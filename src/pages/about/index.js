
import AboutData from '@/data/About';
import AboutCss from '@/styles/pageAbout.module.scss'

export default function About() {
  return (
    <main>

      {/* About List */}
      {AboutData.map((item, index) => {
        return (
          <div className={AboutCss.greenText} key={index}>
            <h2 className="blueText">{item.title}</h2>
            <p className={AboutCss.blueText}>{item.content}</p>
          </div>
        );
      })}

    </main>
  )
}
