import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, CornerLeftUp } from 'lucide-react';

export default function Contact() {
  const scrollToHero = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="contact" className="reveal py-2 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visit us or reach out to begin your luxury beauty journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-light mb-8 tracking-wide">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-amber-600/20 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                  <p className="text-gray-400">
                    Yes lorvens, Jubliee Hills
                    <br />
                    Hyderabad, Telangana 
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-amber-600/20 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Call Us</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm mt-1">Mon - Sat: 9 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-amber-600/20 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email Us</h4>
                  <p className="text-gray-400">hello@yeslorvens.com</p>
                  <p className="text-gray-400">bookings@tpmx.com</p>
                </div>
              </div>
            </div>

           
          </div>

          <div className="h-[500px] bg-gray-800 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.225236874623!2d78.4001456!3d17.4448569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x6f5afc4dbf32320f!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elysian Salon Location"
            ></iframe>
          </div>

         
        </div>

        
      </div>
    </section>
  );
}
