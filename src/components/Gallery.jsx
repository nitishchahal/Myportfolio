import React, { useState } from 'react';
import Lightbox from './Lightbox';

const galleryData = {
  portraits: {
    title: 'Talwiinder Concerts',
    icon: 'fas fa-user',
    images: [
      { src: 'images/talwiinder1.jpg', alt: 'Talwiinder Concerts 1' },
      { src: 'images/talwiinder2.jpg', alt: 'Talwiinder Concerts 2' },
      { src: 'images/talwiinder3.jpg', alt: 'Talwiinder Concerts 3' },
      { src: 'images/talwiinder4.jpg', alt: 'Talwiinder Concerts 4' },
      { src: 'images/talwiinder5.jpg', alt: 'Talwiinder Concerts 5' },
      { src: 'images/talwiinder6.jpg', alt: 'Talwiinder Concerts 6' },
      { src: 'images/talwiinder7.jpg', alt: 'Talwiinder Concerts 7' },
      { src: 'images/talwiinder8.jpg', alt: 'Talwiinder Concerts 8' },
      { src: 'images/talwiinder9.jpg', alt: 'Talwiinder Concerts 9' },
      { src: 'images/talwiinder10.jpg', alt: 'Talwiinder Concerts 10' },
      { src: 'images/talwiinder11.jpg', alt: 'Talwiinder Concerts 11' },
      { src: 'images/talwiinder12.jpg', alt: 'Talwiinder Concerts 12' },
    ],
  },
  nature: {
    title: 'Nature Photography',
    icon: 'fas fa-leaf',
    images: [
      { src: 'images/nature1.jpg', alt: 'Nature 1' },
      { src: 'images/nature2.jpg', alt: 'Nature 2' },
      { src: 'images/nature3.jpg', alt: 'Nature 3' },
      { src: 'images/nature4.jpg', alt: 'Nature 4' },
      { src: 'images/nature5.jpg', alt: 'Nature 5' },
      { src: 'images/nature6.jpg', alt: 'Nature 6' },
      { src: 'images/nature7.jpg', alt: 'Nature 7' },
      { src: 'images/nature8.jpg', alt: 'Nature 8' },
      { src: 'images/nature9.jpg', alt: 'Nature 9' },
      { src: 'images/nature10.jpg', alt: 'Nature 10' },
      { src: 'images/nature11.jpg', alt: 'Nature 11' },
      { src: 'images/nature12.jpg', alt: 'Nature 12' },
      { src: 'images/nature13.jpg', alt: 'Nature 13' },
      { src: 'images/nature14.jpg', alt: 'Nature 14' },
      { src: 'images/nature15.jpg', alt: 'Nature 15' },
      { src: 'images/nature16.jpg', alt: 'Nature 16' },
    ],
  },
  night: {
    title: 'Night Views',
    icon: 'fas fa-moon',
    images: [
      { src: 'images/night1.jpg', alt: 'Night View 1' },
      { src: 'images/night2.jpg', alt: 'Night View 2' },
      { src: 'images/night3.jpg', alt: 'Night View 3' },
      { src: 'images/night4.jpg', alt: 'Night View 4' },
      { src: 'images/night5.jpg', alt: 'Night View 5' },
      { src: 'images/night6.jpg', alt: 'Night View 6' },
      { src: 'images/night7.jpg', alt: 'Night View 7' },
      { src: 'images/night8.jpg', alt: 'Night View 8' },
      { src: 'images/night9.jpg', alt: 'Night View 9' },
      { src: 'images/night10.jpg', alt: 'Night View 10' },
    ],
  },
  nss: {
    title: 'NSS Memories',
    icon: 'fas fa-hands-helping',
    images: [
      { src: 'images/nss1.jpg', alt: 'NSS Memory 1' },
      { src: 'images/nss2.jpg', alt: 'NSS Memory 2' },
      { src: 'images/nss3.jpg', alt: 'NSS Memory 3' },
      { src: 'images/nss4.jpg', alt: 'NSS Memory 4' },
      { src: 'images/nss5.jpg', alt: 'NSS Memory 5' },
      { src: 'images/nss6.jpg', alt: 'NSS Memory 6' },
      { src: 'images/nss7.jpg', alt: 'NSS Memory 7' },
      { src: 'images/nss8.jpg', alt: 'NSS Memory 8' },
      { src: 'images/nss9.jpg', alt: 'NSS Memory 9' },
      { src: 'images/nss10.jpg', alt: 'NSS Memory 10' },
    ],
  },
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('portraits');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % galleryData[activeCategory].images.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryData[activeCategory].images.length) %
        galleryData[activeCategory].images.length
    );
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins">
          My <span className="text-teal">Gallery</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore my photographic journey through different themes
        </p>

        {/* Category Buttons */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-3">
            {Object.keys(galleryData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium relative 
                  transition-all duration-300 
                  ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-teal via-purple-500 to-pink-500 text-white shadow-lg animate-borderGlow'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gradient-to-r hover:from-teal hover:to-purple-500 hover:text-white'
                  }`}
              >
                {galleryData[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          <div id={activeCategory} className="gallery-category">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i
                className={`${galleryData[activeCategory].icon} mr-3 text-teal`}
              ></i>
              {galleryData[activeCategory].title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData[activeCategory].images.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item cursor-pointer"
                  onClick={() => handleOpenLightbox(index)}
                >
                  <div
                    className="relative group overflow-hidden rounded-xl shadow-lg h-64
                               border border-transparent 
                               before:absolute before:inset-0 before:rounded-xl before:p-[2px] 
                               before:bg-gradient-to-r before:from-teal before:via-purple-500 before:to-pink-500 
                               before:animate-borderGlow before:opacity-70 
                               before:-z-10"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <i className="fas fa-expand text-white text-3xl drop-shadow-lg"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryData[activeCategory].images}
          currentIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;
