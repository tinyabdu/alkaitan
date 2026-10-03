import { gallery } from '../data/business'
import ImageSlot from './ImageSlot'

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-pad bg-warm">
      <div className="container-page">
        <h2 id="gallery-title" className="text-3xl font-bold sm:text-4xl">
          Gallery
        </h2>
        <p className="mt-3 max-w-xl text-lg">Food, drinks and the room you will be sitting in.</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <li key={img.id} className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <ImageSlot src={img.src} alt={img.alt} width={800} height={600} />
                </div>
                <figcaption className="mt-2 text-sm font-semibold text-navy">{img.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
