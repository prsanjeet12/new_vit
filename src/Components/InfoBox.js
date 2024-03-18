import React from 'react';
import { motion } from 'framer-motion';

const InfoBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-[200px]
       drop-shadow-lg  bg-gray-950 w-full md:h-[380px] flex 
       flex-col items-center justify-center gap-5 p-5 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl lg:text-4xl font-bold font-poppins text-white text-center"
      >
        VITPARK: Innovators in Digital Transformation
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl lg:text-2xl
         text-white text-center mt-2 md:mt-4 md:w-[720px] 
         lg:w-[1000px] xl:w-full font-poppins"
      >
        VITPARK, your premier partner in digital transformation. Specializing in advanced payment gateways, last-mile connectivity solutions, mobility services, and expert digital marketing strategies. Our state-of-the-art IT park fosters innovation and collaboration, thriving as a community of forward-thinking pioneers. Join us to explore limitless possibilities and unlock unparalleled expertise. Experience the future with VITPARK.
      </motion.p>
    </motion.div>
  );
};

export default InfoBox;