import React from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
const FlavorOfBD = () => {
    return (
        <LazyLoad height={200}>
            <div className='my-20 mx-10 min-h-[500px] flex items-center justify-center '>

                <div className='lg:flex  lg:justify-between'>

                    <div className='mb-10'>
                        <h1 className='text-4xl font-bold'>Flavor of Bangladesh</h1>
                        <p className='wrap'>Alive with heat, spice, <br /> and mesmerizing flavor, Bangladeshi <br /> food is one of Asia’s <br /> most underrated yet wondrous cuisines.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-10'>
                        <motion.div
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '100%', opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            whileHover={{ scale: 1.2 }}
                            className='w-64 text-center'>
                            <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-01-735x490.jpg.webp" alt="" />
                            <p className='font-bold'>Shorshe Ilish</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-64 text-center'>
                            <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-07-735x490.jpg.webp" alt="" />
                            <p className='font-bold'>Bhorta (Mashed Vegetables <br /> with Spices)</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: '100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            whileHover={{ scale: 1.2 }}
                            className='w-64 text-center'>
                            <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-02-735x490.jpg.webp" alt="" />
                            <p className='font-bold'>Kacchi Biriyani (Mutton Biriyani)</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </LazyLoad>
    );
};

export default FlavorOfBD;