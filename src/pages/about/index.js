
import AboutData from '@/data/About';

export default function About() {
  return (
    <main>

      {/* About List */}
      {AboutData.map((item, index) => {
        return (
          <div className="mb-3" key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}

    </main>
  )
}
