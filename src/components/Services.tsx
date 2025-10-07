import { Scissors, Sparkles, Hand, Paintbrush, Wind, Zap } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and treatments using premium products for stunning results.',
    price: 'From $150',
  },
  {
    icon: Sparkles,
    title: 'Skincare & Spa',
    description: 'Rejuvenating facials and spa treatments for radiant, youthful skin.',
    price: 'From $200',
  },
  {
    icon: Hand,
    title: 'Nail Art',
    description: 'Luxurious manicures and pedicures with artistic designs and premium polish.',
    price: 'From $120',
  },
  {
    icon: Paintbrush,
    title: 'Makeup',
    description: 'Professional makeup for special occasions, bridal, and editorial looks.',
    price: 'From $180',
  },
  {
    icon: Wind,
    title: 'Beard Grooming',
    description: 'Complete grooming experience including trim, shave, and facial treatment.',
    price: 'From $100',
  },
  {
    icon: Zap,
    title: 'Advanced Treatments',
    description: 'Cutting-edge treatments like keratin, micro-needling, and more.',
    price: 'From $300',
  },
];

export default function Services() {
  return (
    <section id="services" className="reveal py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            Our <span className="text-amber-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of luxury beauty and wellness services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm hover:from-amber-900/20 hover:to-gray-900 transition-all duration-500 border border-gray-700 hover:border-amber-600"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-600/10 rounded-full group-hover:bg-amber-600/20 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-2xl font-light text-center mb-4 tracking-wide">
                {service.title}
              </h3>

              <p className="text-gray-400 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="text-center">
                <span className="text-lg text-amber-400 font-medium">{service.price}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
