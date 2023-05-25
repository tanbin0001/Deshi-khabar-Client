
import { ToastContainer, toast } from 'react-toastify';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaRegStar } from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import Rating from 'react-rating';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';


const RecipeCards = ({ recipe }) => {
    const { id, title, image, ingredients, description, ratings } = recipe;
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);



    // console.log(ingredients);

    const truncatedDescription = description.substring(0, 100);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);

    }



    const handleClick = () => {
        setIsButtonDisabled(true);
        toast.success('Added to your favorite list');
    }




    return (
        <div>
            <LazyLoad height={200}>
                <motion.div
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="card w-[413px] bg-base-100 mb-10 shadow-xl  ">
                    <figure className="px-10 pt-10">
                        <img src={image} className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{title}</h2>
                        <h2>
                            <Rating
                                className='mr-2'
                                placeholderRating={ratings}
                                readonly
                                emptySymbol={<FaRegStar className='text-red-500'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            {ratings} </h2>
                        <h3 className='font-bold'>Used Ingredients :</h3>
                        <p className='text-left'>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </p>
                        <h3 className='font-bold'>Instructions:</h3>
                        {showFullDescription ? (
                            <p>{description} <button className="border border-red-500 px-2 py-1 text-red-500 rounded hover:bg-red-400 hover:text-white " onClick={toggleDescription}>Read less</button></p>
                        ) : (
                            <p>{truncatedDescription}... <button className="border border-red-500 px-2 py-1 text-red-500 rounded hover:bg-red-400 hover:text-white " onClick={toggleDescription}>Read more</button></p>
                        )}



                        <div className="card-actions">

                            <motion.button animate={{ x: [null, 100, 0] }} className="btn  btn-outline border-red-500 hover:bg-red-400 hover:text-white hover:border-white " onClick={handleClick} disabled={isButtonDisabled}>
                                <FontAwesomeIcon className=' hover:text-white text-red-500 mr-2 ' icon={faHeart}>

                                </FontAwesomeIcon>

                                {isButtonDisabled ? 'Added' : 'Add to favorites'}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </LazyLoad>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RecipeCards;


