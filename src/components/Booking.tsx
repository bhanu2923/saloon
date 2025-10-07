import { useState, FormEvent } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const services = [
  'Signature Hair Styling',
  'Luxury Spa Facial',
  'Deluxe Manicure & Pedicure',
  'Bridal Makeup Package',
  'Hot Stone Massage',
  'Keratin Hair Treatment',
  "Gentleman's Grooming",
  'Micro-Needling Facial',
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="reveal py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-wide">
            Book Your <span className="text-amber-600">Appointment</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserve your moment of luxury and let us transform your beauty experience
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-sm shadow-2xl text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-light text-gray-900 mb-4">Booking Confirmed!</h3>
            <p className="text-lg text-gray-600">
              Thank you for choosing Elysian. We'll contact you shortly to confirm your
              appointment details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <User className="w-5 h-5 mr-2 text-amber-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <Mail className="w-5 h-5 mr-2 text-amber-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <Phone className="w-5 h-5 mr-2 text-amber-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all bg-white"
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2 font-medium">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center text-gray-700 mb-2 font-medium">
                <MessageSquare className="w-5 h-5 mr-2 text-amber-600" />
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all resize-none"
                placeholder="Any special requests or preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-medium tracking-wide transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              CONFIRM BOOKING
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
