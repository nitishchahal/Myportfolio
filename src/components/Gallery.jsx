import React, { useState } from "react";
import Lightbox from "./Lightbox";

const galleryData = {
  portraits: {
    title: "Talwiinder Concerts",
    icon: "fas fa-user",
    images: [
      { src: "../Assets/images/talwiinder1.jpg", alt: "Talwiinder Concerts 1" },
      { src: "../Assets/images/talwiinder2.jpg", alt: "Talwiinder Concerts 2" },
      { src: "../Assets/images/talwiinder3.jpg", alt: "Talwiinder Concerts 3" },
      { src: "../Assets/images/talwiinder4.jpg", alt: "Talwiinder Concerts 4" },
      { src: "../Assets/images/talwiinder5.jpg", alt: "Talwiinder Concerts 5" },
      { src: "../Assets/images/talwiinder6.jpg", alt: "Talwiinder Concerts 6" },
      { src: "../Assets/images/talwiinder7.jpg", alt: "Talwiinder Concerts 7" },
      { src: "../Assets/images/talwiinder8.jpg", alt: "Talwiinder Concerts 8" },
      { src: "../Assets/images/talwiinder9.jpg", alt: "Talwiinder Concerts 9" },
      { src: "../Assets/images/talwiinder10.jpg", alt: "Talwiinder Concerts 10" },
      { src: "../Assets/images/talwiinder11.jpg", alt: "Talwiinder Concerts 11" },
      { src: "../Assets/images/talwiinder12.jpg", alt: "Talwiinder Concerts 12" },
    ],
  },
  nature: {
    title: "Nature Photography",
    icon: "fas fa-leaf",
    images: [
      { src: "../Assets/images/nature1.jpg", alt: "Nature 1" },
      { src: "../Assets/images/nature2.jpg", alt: "Nature 2" },
      { src: "../Assets/images/nature3.jpg", alt: "Nature 3" },
      { src: "../Assets/images/nature4.jpg", alt: "Nature 4" },
      { src: "../Assets/images/nature5.jpg", alt: "Nature 5" },
      { src: "../Assets/images/nature6.jpg", alt: "Nature 6" },
      { src: "../Assets/images/nature7.jpg", alt: "Nature 7" },
      { src: "../Assets/images/nature8.jpg", alt: "Nature 8" },
      { src: "../Assets/images/nature9.jpg", alt: "Nature 9" },
      { src: "../Assets/images/nature10.jpg", alt: "Nature 10" },
      { src: "../Assets/images/nature11.jpg", alt: "Nature 11" },
      { src: "../Assets/images/nature12.jpg", alt: "Nature 12" },
      { src: "../Assets/images/nature13.jpg", alt: "Nature 13" },
      { src: "../Assets/images/nature14.jpg", alt: "Nature 14" },
      { src: "../Assets/images/nature15.jpg", alt: "Nature 15" },
      { src: "../Assets/images/nature16.jpg", alt: "Nature 16" },
    ],
  },
  night: {
    title: "Night Views",
    icon: "fas fa-moon",
    images: [
      { src: "../Assets/images/night1.jpg", alt: "Night View 1" },
      { src: "../Assets/images/night2.jpg", alt: "Night View 2" },
      { src: "../Assets/images/night3.jpg", alt: "Night View 3" },
      { src: "../Assets/images/night4.jpg", alt: "Night View 4" },
      { src: "../Assets/images/night5.jpg", alt: "Night View 5" },
      { src: "../Assets/images/night6.jpg", alt: "Night View 6" },
      { src: "../Assets/images/night7.jpg", alt: "Night View 7" },
      { src: "../Assets/images/night8.jpg", alt: "Night View 8" },
      { src: "../Assets/images/night9.jpg", alt: "Night View 9" },
      { src: "../Assets/images/night10.jpg", alt: "Night View 10" },
    ],
  },
  nss: {
    title: "NSS Memories",
    icon: "fas fa-hands-helping",
    images: [
      { src: "../Assets/images/nss1.jpg", alt: "NSS Memory 1" },
      { src: "../Assets/images/nss2.jpg", alt: "NSS Memory 2" },
      { src: "../Assets/images/nss3.jpg", alt: "NSS Memory 3" },
      { src: "../Assets/images/nss4.jpg", alt: "NSS Memory 4" },
      { src: "../Assets/images/nss5.jpg", alt: "NSS Memory 5" },
      { src: "../Assets/images/nss6.jpg", alt: "NSS Memory 6" },
      { src: "../Assets/images/nss7.jpg", alt: "NSS Memory 7" },
      { src: "../Assets/images/nss8.jpg", alt: "NSS Memory 8" },
      { src: "../Assets/images/nss9.jpg", alt: "NSS Memory 9" },
      { src: "../Assets/images/nss10.jpg", alt: "NSS Memory 10" },
    ],
  },
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("portraits");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => setLightboxOpen(false);

  const handleNext = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % galleryData[activeCategory].images.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + galleryData[activeCategory].images.length) %
        galleryData[activeCategory].images.length
    );
  };

  return (
    <section id="gallery" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins text-light-text dark:text-dark-text">
          My{" "}
          <span className="text-light-accent dark:text-dark-accent">
            Gallery
          </span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto
                      text-light-textMuted dark:text-dark-textMuted">
          Explore my photographic journey through different themes
        </p>

        {/* Category Buttons */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-3">
            {Object.keys(galleryData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-light-accent dark:bg-dark-accent text-snow dark:text-charcoal shadow-lg"
                      : "bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text hover:bg-light-accent hover:text-snow dark:hover:bg-dark-accent dark:hover:text-charcoal"
                  }`}
              >
                {galleryData[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          <div className="gallery-category">
            <h3 className="text-2xl font-bold mb-6 flex items-center
                           text-light-text dark:text-dark-text">
              <i
                className={`${galleryData[activeCategory].icon}
                            mr-3 text-light-accent dark:text-dark-accent`}
              ></i>
              {galleryData[activeCategory].title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData[activeCategory].images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleOpenLightbox(index)}
                >
                  <div
                    className="
                      relative group overflow-hidden rounded-xl shadow-lg h-64
                      border border-light-border dark:border-dark-border
                    "
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="
                        w-full h-full object-cover transition duration-500
                        group-hover:scale-110 group-hover:blur-sm
                      "
                    />

                    <div
                      className="
                        absolute inset-0 opacity-0 group-hover:opacity-100
                        bg-charcoal/40 transition duration-500
                        flex items-center justify-center
                      "
                    >
                      <i className="fas fa-expand text-snow text-3xl"></i>
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
