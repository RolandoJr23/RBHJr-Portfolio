import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface DemoModalProps {
  images: string[];
  onClose: () => void;
  isDarkMode: boolean;
}

const DemoModal: React.FC<DemoModalProps> = ({ images, onClose, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className={`relative max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header/Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all cursor-pointer border-none"
        >
          <X size={24} />
        </button>

        {/* Content Slider */}
        <div className="relative group w-full h-[60vh] md:h-[75vh] flex items-center justify-center bg-transparent">
          <img 
            src={images[currentIndex]} 
            alt={`Demo Image ${currentIndex + 1}`} 
            className="max-w-full max-h-full object-contain pointer-events-none select-none transition-all duration-500"
          />

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border-none"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border-none"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
        </div>

        {/* Counter & Footer */}
        <div className={`p-4 w-full flex flex-col items-center gap-2 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-400'}`} />
            ))}
          </div>
          <p className={`text-xs font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;