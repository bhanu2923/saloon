import { Check, Crown, Gem, Star } from 'lucide-react';

const packages = [
  {
    icon: Star,
    name: 'Gold',
    price: '$299',
    color: 'from-yellow-600 to-yellow-700',
    features: [
      'Signature Hair Styling',
      'Luxury Manicure',
      'Express Facial',
      'Complimentary Beverage',
      'Free Parking',
    ],
  },
  {
    icon: Crown,
    name: 'Platinum',
    price: '$499',
    color: 'from-gray-500 to-gray-700',
    popular: true,
    features: [
      'Premium Hair Treatment',
      'Deluxe Manicure & Pedicure',
      'Luxury Spa Facial',
      'Scalp Massage',
      'Complimentary Products',
      'Priority Booking',
    ],
  },
  {
    icon: Gem,
    name: 'Diamond',
    price: '$799',
    color: 'from-blue-400 to-blue-600',
    features: [
      'Complete Hair Transformation',
      'Full Spa Experience',
      'Premium Makeup Session',
      'Hot Stone Massage',
      'Luxury Gift Bag',
      '24/7 Concierge Service',
    ],
  },
];

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="reveal py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
          Luxury <span className="text-amber-400">Packages</span>
        </h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the perfect package tailored to your beauty needs
        </p>
      </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border-2 ${pkg.popular ? 'border-amber-500 scale-105' : 'border-gray-700'} hover:border-amber-600 transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-gray-900 px-6 py-1 text-sm font-medium tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${pkg.color} rounded-full mb-4`}
                >
                  <pkg.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                  {pkg.name}
                </h3>
                <div className="text-5xl font-light text-amber-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400">Per Session</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium tracking-wide transition-colors duration-300"
              >
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            All packages include a complimentary consultation with our experts
          </p>
        </div>
      </div>
    </section>
  );
}
