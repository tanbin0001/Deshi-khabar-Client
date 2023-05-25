

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCards from '../RecipeCards/RecipeCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { AuthContext } from '../../AuthProvider/AuthProviders';

const Recipes = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    console.log(recipe);
    useEffect(() => {
        fetch('https://deshi-khabar-server-ten.vercel.app/chefsWithRecipes')
            .then(res => res.json())
            .then(data => {
                const foundRecipe = data.find(recipe => recipe.id == id);
                setRecipe(foundRecipe);
            })
    }, [id]);

    if (!recipe) {
        return <div className=" flex justify-center mt-80">
            <div className='text-center'>
                <h1 className='text-bold text-3xl'>দেশি খাবার, সুস্বাদু আহার... <span className='text-red-500'>আসিতেছে</span></h1>
                <progress className="progress w-56 progress-error  "></progress>
            </div>
        </div>
    }

    return (
        <div>
            <div className="hero border-b-2 border-red-500  text-white shadow-2xl mt-20  " style={{ backgroundImage: `url('https://image.lexica.art/full_jpg/4a84f1bc-40b2-47ac-ac3d-1b86fd3a8565')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={recipe.picture} className="lg:max-w-sm rounded-lg shadow-2xl " />
                    <div className='my-20'>
                        <h1 className="text-5xl font-bold"> {recipe.chef_name}</h1>
                        <p className="py-6">{recipe.bio}</p>
                        <div className=' '>
                            <p>Years of Experience: {recipe.years_of_experience}</p>
                            <p>Number of Recipes: {recipe.num_recipes} <FontAwesomeIcon className='text-red-500' icon={faBowlFood} /></p>
                            <p><small>Likes:  {recipe.likes} <FontAwesomeIcon className='text-red-500' icon={faThumbsUp} />
                            </small></p>
                        </div>

                    </div>
                </div>
            </div>

            {/* recipes card section */}
            <div className='mt-10'>
                <motion.h1
                    whileHover={{ scale: 1.2 }} className='mx-auto text-center font-extrabold text-3xl border-r-8 lg:w-[450px] border-red-500'>{recipe.chef_name}'s  Awesome <span className='text-red-500'>Recipes</span></motion.h1>
                <div className='flex justify-center'>
                    <div className='grid  lg:grid-cols-3  gap-10 '>
                        {
                            recipe.recipes.map(recipe => <RecipeCards
                                key={recipe.id}
                                recipe={recipe}
                            ></RecipeCards>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
