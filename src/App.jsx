import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import FeaturedDishes from './components/FeaturedDishes'
import ReservationForm from './components/ReservationForm'
import Gallery from './components/Gallery'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-white px-5 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <MenuSection />
        <FeaturedDishes />
        <ReservationForm />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  )
}
