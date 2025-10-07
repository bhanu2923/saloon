import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 group"
          >
            <Sparkles
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-amber-400' : 'text-amber-300'
              }`}
              strokeWidth={1.5}
            />
            <div className="text-white">
              <div className="text-2xl font-light tracking-wider">Elysian</div>
              <div className="text-xs tracking-[0.2em] text-amber-300 -mt-1">
                LUXURY SALON
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={scrollToBooking}
              className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium tracking-wide transition-colors duration-300 rounded-full"
            >
              BOOK NOW
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-700 pt-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={scrollToBooking}
                className="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium tracking-wide transition-colors duration-300 text-center"
              >
                BOOK NOW
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
