import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-teal-500/30 hover:bg-teal-500/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
  >
    <ChevronRight className="w-6 h-6" />
  </motion.button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-teal-500/30 hover:bg-teal-500/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
  >
    <ChevronLeft className="w-6 h-6" />
  </motion.button>
);

export const HeroSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8 w-full">
        <ul className="flex justify-center items-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300" />
    ),
  };

  const slides = [
    {
      image: 'https://res.cloudinary.com/dyp247eoh/image/upload/v1769610924/royal1_gxftoo.jpg',
      title: "Nature's Luxury",
      subtitle: 'Crafted for Royalty',
      description: 'Discover our exclusive collection of handcrafted gems',
    },
    {
      image: 'https://res.cloudinary.com/dyp247eoh/image/upload/v1769610924/royal1_gxftoo.jpg',
      title: 'Timeless Elegance',
      subtitle: 'Exquisite Craftsmanship',
      description: 'Where tradition meets contemporary design',
    },
    {
      image: 'https://res.cloudinary.com/dyp247eoh/image/upload/v1769610924/royal1_gxftoo.jpg',
      title: 'Royal Collection',
      subtitle: 'Precious Moments',
      description: 'Celebrate life with our stunning jewelry pieces',
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden pt-20">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a4f4d]/90 via-[#0a4f4d]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-teal-300 text-lg md:text-xl mb-4 tracking-widest uppercase font-light"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-teal-100 text-lg md:text-xl mb-8 max-w-xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-wrap gap-4"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(94, 234, 212, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg"
                    >
                      Explore Collection
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-teal-400 text-teal-100 font-medium rounded-full hover:bg-teal-500/20 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-20 right-20 w-64 h-64 border-2 border-teal-400 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="absolute bottom-20 right-40 w-48 h-48 border-2 border-teal-300 rounded-full blur-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
