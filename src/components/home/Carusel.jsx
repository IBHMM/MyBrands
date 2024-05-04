import { useEffect, useState } from "react";
import Left from '../../assets/home/left.png';
import Right from '../../assets/home/right.png';

export default function Carousel({images}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (currentImage + 1) % images.length;
      setCurrentImage(newIndex);
    }, 6000);
  
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <section className="relative flex w-[79%] items-center justify-center bg-[#bd4747] max-[1200px]:w-[90%] overflow-hidden">
      <div className="relative flex  max-[1008px]:h-[400px] max-[600px]:h-[270px] max-[400px]:h-[200px] bg-red-500 min-w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt={`Slide ${index}`}
              key={index}
              className="min-w-full w-full h-full" 
            />
          )
        })}
      </div>

      <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-[10px] w-10 h-10 rounded-md bg-[rgba(255,255,255,0.5)] max-[500px]:hidden">
        <img src={Right} alt="Next" className="w-6 h-6 mx-auto" />
      </button>
      <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-[10px] w-10 h-10 rounded-md bg-[rgba(255,255,255,0.5)] max-[500px]:hidden">
        <img src={Left} alt="Previous" className="w-6 h-6 mx-auto" />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`inline-block w-10 h-[3px] mx-1 rounded-full ${index === currentImage ? 'bg-gray-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
