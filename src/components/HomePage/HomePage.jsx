


import React, { useContext } from 'react';
import Chefs from '../Chefs/Chefs';
import { motion, AnimatePresence } from 'framer-motion';
import LeaveAReply from '../LeaveAReply/LeaveAReply';
import FlavorOfBD from '../FlavorOfBD/FlavorOfBD';
import { AuthContext } from '../../AuthProvider/AuthProviders';


const HomePage = () => {
    const { loading } = useContext(AuthContext);



    return (
        <div>
            {loading ? (
                <div className=" flex justify-center mt-80">
                    <div className='text-center'>
                        <h1 className='text-bold text-3xl'>দেশি খাবার, সুস্বাদু আহার... <span className='text-red-500'>আসিতেছে</span></h1>
                        <progress className="progress w-56 progress-error  "></progress>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="hero min-h-screen " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80')` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=' mt-36 items-center'>
                                <div>
                                    <motion.div

                                        initial={{ x: '-100%', opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: '100%', opacity: 0 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    >
                                        <h1 className="mb-5 text-black text-5xl font-bold">Welcome To <br /> Deshi Khabar</h1>
                                        <p className="mb-5 text-black"> “Part of the secret of success is to eat what you like and let the food fight it out inside.”
                                            <br />   –Mark Twain</p>
                                        <motion.button

                                            whileHover={{ scale: 1.2 }}
                                            className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white "  >Get Started</motion.button>
                                    </motion.div>
                                    <AnimatePresence>
                                        <motion.div

                                            initial={{ x: '100%', opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: '-100%', opacity: 0 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            className='flex  justify-center box'>
                                            <img className='w-96' src="https://files.catbox.moe/eqobru.png"></img>
                                        </motion.div>

                                    </AnimatePresence>




                                </div>
                            </div>
                        </div>
                    </div>
                    <Chefs></Chefs>
                    <FlavorOfBD></FlavorOfBD>
                    <LeaveAReply></LeaveAReply>
                </div>
            )}
        </div>
    );
};

export default HomePage;


