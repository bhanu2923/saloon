import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="reveal py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-wide">
            About <span className="text-amber-600">Elysian</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury Salon Interior"
              className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-light text-gray-900 tracking-wide">
              Where Elegance Meets Excellence
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over a decade, Elysian has been the epitome of luxury beauty services. Our passion is to provide an unparalleled experience where every detail is meticulously crafted to perfection.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of master stylists and beauty experts are trained internationally, bringing world-class techniques and the finest products to create transformations that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Step into our sanctuary of sophistication, where state-of-the-art facilities blend seamlessly with timeless elegance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-light text-gray-900 mb-3">Premium Quality</h4>
            <p className="text-gray-600">
              Only the finest luxury products and cutting-edge techniques for exceptional results.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-light text-gray-900 mb-3">Expert Professionals</h4>
            <p className="text-gray-600">
              Internationally trained stylists with decades of combined experience.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-light text-gray-900 mb-3">Personalized Care</h4>
            <p className="text-gray-600">
              Tailored treatments designed specifically for your unique beauty needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
