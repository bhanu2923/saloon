import { Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-2 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-amber-400" />
              Business Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Yes lorvens, Jubliee Hills<br />
                  Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <a href="mailto:hello@yeslorvens.com" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  hello@yeslorvens.com
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <a href="mailto:bookings@tpmx.com" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  bookings@tpmx.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-medium mb-6">Follow Us</h3>
            <p className="text-gray-400 mb-6">Stay connected with us on social media</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elysian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
