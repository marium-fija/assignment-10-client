import React from 'react';
import img1 from '../assets/slider-1.jpg'
import img2 from '../assets/slider-2.jpg'
import img3 from '../assets/slider-3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    const headings = ["Grow Green, Live Clean", "Your Garden, Your Joy", "Plant Today, Breathe Tomorrow"];
  const descriptions = [
    "Gardening is the art of nurturing life, one seed at a time.",
    "Every flower is a soul blossoming in nature.",
    "Planting trees today ensures a greener tomorrow."
  ];
    return (
        <div>
            <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index}>
            <div
            key={headings[index]} 
              className="h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                 viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="text-center bg-black/50 p-6 rounded-2xl max-w-2xl"
              >
                {/* Heading with typewriter */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <Typewriter
                    words={[headings[index]]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>

                {/* Description (appear after heading) */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="text-lg md:text-xl"
                >
                  {descriptions[index]}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
    );
};

export default Banner;