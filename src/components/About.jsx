import { about } from '../data/business'
import ImageSlot from './ImageSlot'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad bg-warm">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="order-2 aspect-[4/3] overflow-hidden rounded-3xl md:order-1">
          <ImageSlot src={null} alt="Guests dining at Alkaitan" />
        </div>
        <div className="order-1 md:order-2">
          <h2 id="about-title" className="text-3xl font-bold sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-5 max-w-prose space-y-4 text-lg leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
