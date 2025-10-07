import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="reveal relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-amber-300 animate-pulse" strokeWidth={1.5} />
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wide">
          Elysian
          <span className="block text-4xl md:text-5xl mt-2 text-amber-200 font-extralight tracking-[0.3em]">
            LUXURY SALON
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-wide">
          Experience Luxury. Redefine Beauty.
        </p>

        <button
          onClick={scrollToBooking}
          className="group relative px-12 py-4 bg-white text-gray-900 text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:text-white"
        >
          <span className="relative z-10">BOOK APPOINTMENT</span>
          <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

    </section>
  );
}
