import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Anderson',
    service: 'Signature Hair Styling',
    rating: 5,
    review: 'Absolutely stunning experience! The ambiance is incredibly luxurious and the staff made me feel like royalty. My hair has never looked better!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Michael Chen',
    service: "Gentleman's Grooming",
    rating: 5,
    review: 'Best grooming service in the city. The attention to detail is exceptional and the hot towel shave is pure bliss.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Isabella Martinez',
    service: 'Bridal Makeup Package',
    rating: 5,
    review: 'The bridal package exceeded all my expectations. I felt like a princess on my wedding day. Thank you for making it so special!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'James Wilson',
    service: 'Hot Stone Massage',
    rating: 5,
    review: 'The hot stone massage was exactly what I needed. The therapist was skilled and the environment was so peaceful.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Emma Thompson',
    service: 'Luxury Spa Facial',
    rating: 5,
    review: 'My skin is glowing after the luxury facial! The esthetician was knowledgeable and the products are top-notch.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Oliver Davis',
    service: 'Keratin Hair Treatment',
    rating: 5,
    review: 'Worth every penny. The keratin treatment transformed my frizzy hair into smooth, manageable locks. Highly recommend!',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function Testimonials() {
    return (
      <section id="testimonials" className="reveal py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-wide">
              Client <span className="text-amber-600">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our valued clients say about their experience
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-600"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
