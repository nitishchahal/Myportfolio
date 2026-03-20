import React, { useState, useRef, useEffect, useCallback } from "react";
import Lightbox from "./Lightbox";

const galleryData = {
  portraits: {
    title: "Talwiinder Concerts",
    icon: "fas fa-user",
    images: [
      { src: "images/talwiinder1.jpg", alt: "Talwiinder Concerts 1" },
      { src: "images/talwiinder2.jpg", alt: "Talwiinder Concerts 2" },
      { src: "images/talwiinder3.jpg", alt: "Talwiinder Concerts 3" },
      { src: "images/talwiinder4.jpg", alt: "Talwiinder Concerts 4" },
      { src: "images/talwiinder5.jpg", alt: "Talwiinder Concerts 5" },
      { src: "images/talwiinder6.jpg", alt: "Talwiinder Concerts 6" },
      { src: "images/talwiinder7.jpg", alt: "Talwiinder Concerts 7" },
      { src: "images/talwiinder8.jpg", alt: "Talwiinder Concerts 8" },
      { src: "images/talwiinder9.jpg", alt: "Talwiinder Concerts 9" },
      { src: "images/talwiinder10.jpg", alt: "Talwiinder Concerts 10" },
      { src: "images/talwiinder11.jpg", alt: "Talwiinder Concerts 11" },
      { src: "images/talwiinder12.jpg", alt: "Talwiinder Concerts 12" },
    ],
  },
  nature: {
    title: "Nature Photography",
    icon: "fas fa-leaf",
    images: [
      { src: "images/nature1.jpg", alt: "Nature 1" },
      { src: "images/nature2.jpg", alt: "Nature 2" },
      { src: "images/nature3.jpg", alt: "Nature 3" },
      { src: "images/nature4.jpg", alt: "Nature 4" },
      { src: "images/nature5.jpg", alt: "Nature 5" },
      { src: "images/nature6.jpg", alt: "Nature 6" },
      { src: "images/nature7.jpg", alt: "Nature 7" },
      { src: "images/nature8.jpg", alt: "Nature 8" },
      { src: "images/nature9.jpg", alt: "Nature 9" },
      { src: "images/nature10.jpg", alt: "Nature 10" },
      { src: "images/nature11.jpg", alt: "Nature 11" },
      { src: "images/nature12.jpg", alt: "Nature 12" },
      { src: "images/nature13.jpg", alt: "Nature 13" },
      { src: "images/nature14.jpg", alt: "Nature 14" },
      { src: "images/nature15.jpg", alt: "Nature 15" },
      { src: "images/nature16.jpg", alt: "Nature 16" },
    ],
  },
  night: {
    title: "Night Views",
    icon: "fas fa-moon",
    images: [
      { src: "images/night1.jpg", alt: "Night View 1" },
      { src: "images/night2.jpg", alt: "Night View 2" },
      { src: "images/night3.jpg", alt: "Night View 3" },
      { src: "images/night4.jpg", alt: "Night View 4" },
      { src: "images/night5.jpg", alt: "Night View 5" },
      { src: "images/night6.jpg", alt: "Night View 6" },
      { src: "images/night7.jpg", alt: "Night View 7" },
      { src: "images/night8.jpg", alt: "Night View 8" },
      { src: "images/night9.jpg", alt: "Night View 9" },
      { src: "images/night10.jpg", alt: "Night View 10" },
    ],
  },
  nss: {
    title: "NSS Memories",
    icon: "fas fa-hands-helping",
    images: [
      { src: "images/nss1.jpg", alt: "NSS Memory 1" },
      { src: "images/nss2.jpg", alt: "NSS Memory 2" },
      { src: "images/nss3.jpg", alt: "NSS Memory 3" },
      { src: "images/nss4.jpg", alt: "NSS Memory 4" },
      { src: "images/nss5.jpg", alt: "NSS Memory 5" },
      { src: "images/nss6.jpg", alt: "NSS Memory 6" },
      { src: "images/nss7.jpg", alt: "NSS Memory 7" },
      { src: "images/nss8.jpg", alt: "NSS Memory 8" },
      { src: "images/nss9.jpg", alt: "NSS Memory 9" },
      { src: "images/nss10.jpg", alt: "NSS Memory 10" },
    ],
  },
};

/* All frames same size — uniform strip */

/* Drag-to-scroll hook */
function useDragScroll() {
  const ref = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.style.cursor = "grabbing";
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseDown, onMouseUp, onMouseMove]);

  return ref;
}

/* Perf holes row */
const PerfHoles = ({ count = 8 }) => (
  <div className="flex gap-[3px] px-1">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="w-3.5 h-2 flex-shrink-0 rounded-[1px] border border-light-border dark:border-dark-border opacity-50"
      />
    ))}
  </div>
);

/* Single film frame */
const FilmFrame = ({ image, index, onClick }) => {
  return (
  <div
  className="relative flex-shrink-0 w-72 h-64 rounded-sm overflow-hidden
             bg-light-border dark:bg-dark-border
             border border-light-border dark:border-dark-border
             cursor-pointer group
             transition duration-300
             group-hover:grayscale"
  onClick={onClick}
>
      {/* Frame number */}
      <span
        className="absolute top-2 left-2.5 z-10 text-[9px] tracking-widest
                   text-light-accent dark:text-dark-accent opacity-70"
        style={{ fontFamily: "monospace" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ filter: "brightness(0.88) contrast(1.05)" }}
      />

      {/* Hover overlay — always dark regardless of theme, it's on top of the photo */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }}
      >
        <span className="text-white/90 text-xs tracking-wide leading-snug">
          {image.alt}
        </span>
      </div>

      {/* Expand icon */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      w-7 h-7 rounded-sm flex items-center justify-center bg-black/50
                      border border-light-accent dark:border-dark-accent">
        <i className="fas fa-expand text-[10px] text-light-accent dark:text-dark-accent" />
      </div>
    </div>
  );
};

/* One reel strip (a full category row) */
const ReelStrip = ({ categoryKey, data, reelIndex, onImageClick }) => {
  const stripRef = useDragScroll();

  return (
    <div className="mb-14">
      {/* Reel label */}
      <div className="flex items-center gap-4 mb-3 px-6 md:px-10">
        <span
          className="text-xs tracking-widest text-light-textMuted dark:text-dark-textMuted"
          style={{ fontFamily: "monospace" }}
        >
          {String(reelIndex + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-semibold flex items-center gap-2 font-poppins
                       text-light-text dark:text-dark-text">
          <i className={`${data.icon} text-sm text-light-accent dark:text-dark-accent`} />
          {data.title}
        </h3>
        <span
          className="ml-auto text-xs tracking-widest text-light-textMuted dark:text-dark-textMuted"
          style={{ fontFamily: "monospace" }}
        >
          {data.images.length} frames
        </span>
      </div>

      {/* Top perf holes */}
      <div className="overflow-hidden px-6 md:px-10 mb-[3px]">
        <PerfHoles count={20} />
      </div>

      {/* The strip — bg strip band in theme color */}
      <div className="bg-light-border/40 dark:bg-dark-border/40">
        <div
          ref={stripRef}
          className="flex gap-[3px] overflow-x-auto px-6 md:px-10 pb-[3px] pt-[3px]"
          style={{
            scrollbarWidth: "none",
            cursor: "grab",
            userSelect: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {data.images.map((image, i) => (
            <FilmFrame
              key={i}
              image={image}
              index={i}
              onClick={() => onImageClick(i)}
            />
          ))}
        </div>
      </div>

      {/* Bottom perf holes */}
      <div className="overflow-hidden px-6 md:px-10 mt-[3px]">
        <PerfHoles count={20} />
      </div>
    </div>
  );
};

/* Main Gallery component */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxCategory, setLightboxCategory] = useState("portraits");

  const handleOpenLightbox = (category, index) => {
    setLightboxCategory(category);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => setLightboxOpen(false);

  const handleNext = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % galleryData[lightboxCategory].images.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + galleryData[lightboxCategory].images.length) %
        galleryData[lightboxCategory].images.length
    );
  };

  const categoriesToShow =
    activeCategory === "all"
      ? Object.keys(galleryData)
      : [activeCategory];

  return (
    <section id="gallery" className="py-24 bg-light-bg dark:bg-dark-bg">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 
               text-light-text dark:text-dark-text font-cursive">
  My{" "}
  <span className="text-light-accent dark:text-dark-accent font-cursive">
    Gallery
  </span>
</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-sm tracking-wide
                      text-light-textMuted dark:text-dark-textMuted">
          Explore my photographic journey through different themes
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {/* All button */}
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm
                        transition-all duration-200 font-medium
                        ${activeCategory === "all"
                          ? "bg-light-accent dark:bg-dark-accent text-snow dark:text-charcoal"
                          : "bg-transparent border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted hover:border-light-accent dark:hover:border-dark-accent hover:text-light-accent dark:hover:text-dark-accent"
                        }`}
            style={{ fontFamily: "monospace" }}
          >
            — All
          </button>

          {Object.keys(galleryData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm
                          transition-all duration-200 font-medium
                          ${activeCategory === key
                            ? "bg-light-accent dark:bg-dark-accent text-snow dark:text-charcoal"
                            : "bg-transparent border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted hover:border-light-accent dark:hover:border-dark-accent hover:text-light-accent dark:hover:text-dark-accent"
                          }`}
              style={{ fontFamily: "monospace" }}
            >
              <i className={`${galleryData[key].icon} mr-1.5 text-[10px]`} />
              {galleryData[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Reels */}
      <div>
        {categoriesToShow.map((key, idx) => (
          <React.Fragment key={key}>
            <ReelStrip
              categoryKey={key}
              data={galleryData[key]}
              reelIndex={idx}
              onImageClick={(imgIdx) => handleOpenLightbox(key, imgIdx)}
            />
            {idx < categoriesToShow.length - 1 && (
              <div className="mx-6 md:mx-10 mb-10 border-t border-light-border dark:border-dark-border" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryData[lightboxCategory].images}
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