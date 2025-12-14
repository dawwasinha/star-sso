import { useState } from 'react';
import saas1 from '@/assets/images/landing/saas/arise.png';
import traceImg1 from '@/assets/images/landing/saas/trace.png';
import traceImg2 from '@/assets/images/landing/saas/trace2.png';
import traceImg3 from '@/assets/images/landing/saas/arise4.png';

const Hero = () => {
  const images = [traceImg1, traceImg2, traceImg3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Helper function untuk mendapatkan index dengan looping
  const getLoopedIndex = (index) => {
    return (index + images.length) % images.length;
  };

  // Render 3 slides: prev, current, next
  const getVisibleSlides = () => {
    return [
      { index: getLoopedIndex(currentSlide - 1), position: 'prev' },
      { index: currentSlide, position: 'current' },
      { index: getLoopedIndex(currentSlide + 1), position: 'next' }
    ];
  };
  return (
    <>
      {/* Bagian Hero Content (Sudah Rapi) */}
      <section id="home" className="relative overflow-hidden bg-opacity-50 bg-gradient-to-r from-blue-100 to-blue-50 pb-96 pt-40">
        <div className="container relative">
          <div className="text-center">
            <div className="mt-6 flex justify-center">
              <div className="max-w-3xl">
                <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
                  <span className="text-sm font-semibold text-primary">STAR Ecosystem</span>
                </div>
                <h1 className="mb-6 text-5xl/tight font-bold text-gray-800 lg:text-6xl/tight">
                  Solusi <span className="text-primary">Terintegrasi</span> untuk Transformasi Digital
                </h1>
                <p className="mx-auto text-lg text-gray-600 lg:max-w-2xl">
                  Platform STAR menggabungkan tiga aplikasi powerful dalam satu ekosistem: ARISE untuk manajemen aset & risiko, REPORT untuk tracking operasi, dan TRACE untuk konfigurasi perubahan.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#aplikasi" className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl">
                Lihat Aplikasi
              </a>
              <a href="#features" className="rounded-lg border-2 border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
        <div className="shape absolute -bottom-[1px] end-0 start-0 overflow-hidden text-white sm:-bottom-px">
          <svg className="h-auto w-full origin-top scale-[2.0]" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Bagian Carousel */}
      <div className="pb-24 carousel-wrapper">
        <style>{`
          .carousel-wrapper * {
            transition: none !important;
          }
          .carousel-item {
            transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                        opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                        filter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          }
          .carousel-card {
            transition: box-shadow 0.5s ease, 
                        transform 0.3s ease !important;
          }
          .carousel-img {
            transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          }
          .carousel-dot {
            transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                        background-color 0.5s ease, 
                        transform 0.2s ease !important;
          }
        `}</style>
        <div className="relative z-10 -mt-80 overflow-hidden px-6">
          
          <div className="group relative max-w-7xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-4 text-gray-800 shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-4 text-gray-800 shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Images Container - 3 Slides Visible with Looping */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center px-20">
              <div className="flex gap-8 items-center justify-center w-full">
                {getVisibleSlides().map(({ index, position }) => {
                  const isCenter = position === 'current';
                  const isPrev = position === 'prev';
                  const isNext = position === 'next';
                  
                  return (
                    <div
                      key={`${position}-${index}`}
                      className={`carousel-item flex-shrink-0 ${
                        isCenter 
                          ? 'scale-110 opacity-100 z-10 translate-y-0' 
                          : 'scale-75 opacity-30 z-0 translate-y-6'
                      } ${isPrev ? '-rotate-6' : ''} ${isNext ? 'rotate-6' : ''}`}
                      style={{
                        width: isCenter ? '700px' : '500px',
                        maxWidth: isCenter ? '55vw' : '40vw',
                        filter: isCenter ? 'brightness(1) saturate(1.2) contrast(1.05)' : 'brightness(0.7) saturate(0.7) blur(2px)'
                      }}
                    >
                      <div 
                        className={`carousel-card overflow-hidden rounded-3xl shadow-2xl cursor-pointer ${
                          isCenter ? '' : 'shadow-gray-500/30'
                        } hover:shadow-3xl`}
                        onClick={() => !isCenter && goToSlide(index)}
                      >
                        <img 
                          src={images[index]} 
                          alt={`TRACE Platform Screenshot ${index + 1}`} 
                          className={`carousel-img h-full w-full object-cover ${
                            isCenter ? 'scale-105' : 'scale-100'
                          }`}
                          style={{ aspectRatio: '16/9' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-dot rounded-full ${
                    index === currentSlide 
                      ? 'bg-primary w-12 h-3 shadow-lg shadow-primary/50' 
                      : 'bg-gray-400 w-3 h-3 hover:bg-gray-600 hover:scale-150'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Hero;