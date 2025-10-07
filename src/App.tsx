import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  useRevealOnScroll();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
