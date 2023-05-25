import React from 'react';
import { motion } from 'framer-motion';
const LeaveAReply = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(" https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold text-white">Leave a Reply For Us</h1>
                        <p className="py-6 text-white">Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-red-400">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Comment *</span>
                                </label>
                                <input type="text" className="input h-32  input-bordered" />
                                <label className="label font-bold">
                                    <span className="label-text">Name *</span>
                                </label>
                                <input type="text" className="input  input-bordered" />
                                <label className="label font-bold">
                                    <span className="label-text">Email *</span>
                                </label>
                                <input type="text" className="input  input-bordered" />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <p className='text-red-500'>Thanks For Leaving a Memory</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <motion.button
                                    animate={{ x: [null, 100, 0] }}
                                    whileHover={{ scale: 1.2 }}
                                    className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white "  >
                                    Post Comment
                                </motion.button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LeaveAReply;