import { useEffect, useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hair Styling',
  },
  {
    url: 'https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hair Care',
  },
  {
    url: 'https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Beauty Treatment',
  },
  {
    url: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Makeup Session',
  },
  {
    url: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Skin Care',
  },
  {
    url: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hair Coloring',
  },
  {
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Facial Treatment',
  },
  {
    url: 'https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hair Spa',
  },
  {
    url: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hair Spa',
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const next = () => setOpenIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
  const prev = () => setOpenIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex]);
  return (
    <section id="gallery" className="reveal reveal--visible py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-wide">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our world of beauty and transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-square cursor-pointer rounded-lg"
              onClick={() => setOpenIndex(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.dataset.fallbackApplied) return;
                  target.dataset.fallbackApplied = 'true';
                  target.src = 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=600';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-light tracking-wide">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="absolute inset-0" onClick={() => setOpenIndex(null)} />
          <div className="relative z-10 max-w-5xl w-full px-2 md:px-3">
            <img
              src={galleryImages[openIndex].url}
              alt={galleryImages[openIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            {/* Amber arrows attached to image edges */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-0 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl"
            >
              ›
            </button>
            {/* Amber close on top-right edge */}
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
