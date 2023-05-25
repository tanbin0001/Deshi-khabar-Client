import React from 'react';
import gif from '../../assets/error.gif'

const ErrorPage = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className='bg-black   h-screen flex justify-center' >
            <div>
                <img src={gif} />
                <div className=' flex justify-center'>
                    <button className='btn' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
