/* import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
;

import { AuthContext } from '../../AuthProvider/AuthProviders'; */

import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {

    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from || '/';




    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1)
    }


    const handleRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!name || !email || !password || !photoURL) {
            toast.error('Please provide all the infos');
            return;
        }
        else if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Registration successful');
                form.reset();
                setError('')
                handleUpdateUserProfile(name, photoURL);



            })
            .catch(error => {
                setError(error.message);
                toast.warning(`${error}`);
            })

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { navigateNow() })

            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-red-400">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-red-500">Already have an account? Please Login!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500">Register</button>

                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;