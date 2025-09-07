import React from 'react';
import counterBG from '../assets/counterBG.jpeg';
import counterGirl from '../assets/couterGirl.jpeg';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const CounterSection = () => {
    const counters = [
        { title: "Gardeners", count: 150 },
        { title: "Gardens", count: 320 },
        { title: "Certification", count: 45 },
        { title: "Food Grown Yearly", count: 1200 },
    ];

    return (
          <section className="relative py-20">
<h1 className='text-5xl font-bold text-emerald-900 mb-10 text-center'>Our Impact , Together</h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <img 
            src={counterGirl} 
            alt="Counter Pic" 
            className="w-[550px] h-[550px] rounded-xl shadow-lg object-cover" 
          />
        </motion.div>

        {/* Right Counter Section*/}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex-1 flex items-center justify-center h-[550px]"
        >
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${counterBG})` }}
          ></div>

          {/* Counters Grid */}
          <div className="relative grid grid-cols-2 gap-8 max-w-md z-10">
            {counters.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/80 rounded-xl shadow-md p-6 text-center"
              >
                <h2 className="text-3xl font-bold text-green-800">
                  <CountUp end={item.count} duration={100} />
                </h2>
                <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
    );
};

export default CounterSection;
