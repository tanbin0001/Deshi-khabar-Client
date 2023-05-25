import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://deshi-khabar-server-ten.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div className='mt-10'>
            <h1 className='mx-auto text-center font-extrabold text-3xl border-r-8 border-red-500      mb-10 lg:w-[400px]'>Our Awesome <span className='text-red-500'>Chefs</span></h1>
            <div className=' bg-cover   bg-fixed py-10' style={{ backgroundImage: `url('https://files.catbox.moe/9ro19a.png')` }}>

                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;