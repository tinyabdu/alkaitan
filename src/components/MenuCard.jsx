import { formatPrice } from '../data/business'
import ImageSlot from './ImageSlot'

export default function MenuCard({ item }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-pale bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageSlot src={item.image} alt={item.image ? item.name : ''} width={640} height={480} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="shrink-0 text-lg font-bold text-brand">{formatPrice(item.price)}</p>
        </div>
        <p className="leading-relaxed">{item.description}</p>
        {item.dietary?.length > 0 && (
          <p className="mt-auto pt-2 text-sm font-semibold text-navy">{item.dietary.join(', ')}</p>
        )}
      </div>
    </article>
  )
}
