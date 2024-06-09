import { useState } from "react";

const images = [
  "/images/imagen1.jpeg",
  "/images/imagen2.jpeg",
  "/images/imagen3.jpeg",
  "/images/imagen4.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-min ">
      <div className="overflow-hidden h-full w-full">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `46vw`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full lg:w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full ml-1"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full mr-1"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
