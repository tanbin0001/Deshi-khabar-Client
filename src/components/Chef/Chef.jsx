import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faBowlFood, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Chef = ({ chef }) => {
    const { id, chef_name, picture, years_of_experience, num_recipes, likes } = chef;
    return (
        <div>

            <div className='mt-5'>
                <div className="card lg:card-side max-w-[800px] bg-base-100 shadow-xl  mx-auto  border-2 border-red-500 ">
                    <LazyLoad height={200}>

                        <motion.figure
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            whileHover={{ scale: 1.2 }}
                            className='w-96 h-96'><img src={picture} /></motion.figure>
                    </LazyLoad>
                    <LazyLoad height={300}>
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="card-body">
                            <h2 className="card-title text-3xl">{chef_name}</h2>
                            <div>
                                <p>Years of Experience: {years_of_experience}</p>
                                <p>Number of Recipes: {num_recipes} <FontAwesomeIcon className='text-red-500' icon={faBowlFood} /></p>
                                <p><small>Likes:  {likes} <FontAwesomeIcon className='text-red-500' icon={faThumbsUp} />
                                </small></p>
                            </div>
                            <div className="card-actions  ">
                                <Link to={`/recipes/${id}`}>
                                    <motion.button
                                        whileHover={{ scale: 0.90 }}
                                        whileTap={{ scale: 2 }}

                                        className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white " >View Recipes <FontAwesomeIcon className='ml-2' icon={faArrowCircleRight} /></motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </LazyLoad>
                </div>
            </div>
        </div >
    );
};

export default Chef;