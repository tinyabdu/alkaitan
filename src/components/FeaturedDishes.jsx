import { menuItems } from '../data/menu'
import MenuCard from './MenuCard'

export default function FeaturedDishes() {
  const featured = menuItems.filter((i) => i.featured).slice(0, 3)
  if (featured.length === 0) return null

  return (
    <section id="featured" aria-labelledby="featured-title" className="section-pad bg-pale">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 id="featured-title" className="text-3xl font-bold sm:text-4xl">
              Featured dishes
            </h2>
            <p className="mt-3 max-w-xl text-lg">A few plates to start with.</p>
          </div>
          <a href="#menu" className="btn btn-outline shrink-0">
            See the full menu
          </a>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.id}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
