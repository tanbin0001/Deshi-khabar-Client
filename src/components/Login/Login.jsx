
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';



const Login = () => {
    const [error, setError] = useState('');

    const { login, providerLogin, githubProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email) {
            toast.error('Please provide an Email');
            return;
        } else if (!password) {
            toast.error('Please provide a Password');
            return;
        }
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Invalid password!');
                }
                else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid Email');
                }
                else {
                    setError(error.message);
                    toast.warning(`${error}`);
                }
            })
    }
    //google login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);
                toast.warning(`${error}`);
                console.log(error);
            })
    }
    // github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const usr = result.user;
                console.log(usr);
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);
                toast.warning(`${error}`);
                console.log(error);
            })

    }

    return (

        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-red-400">
                    <form onSubmit={handleLogin} className="card-body">
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
                                <Link to='/register' state={{ from }} className="label-text-alt link link-hover text-red-500">New to Deshi Khabar? create a new account!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <motion.button

                                whileHover={{ scale: 1.2 }}
                                className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white "  >
                                Login
                            </motion.button>
                        </div>
                        <h3 className=' mt-6 text-center font-bold underline text-1xl text-red-500'>Or Login With</h3>
                    </form>
                    <div className=" flex justify-between mb-10 mx-5">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning rounded-none"> <FaGoogle></FaGoogle> oogle</button>

                        <button onClick={handleGithubSignIn} className=" btn btn-outline rounded-none "> <FaGithub className='mr-2'></FaGithub> Github</button>
                    </div>
                </div>
            </div >
            <ToastContainer></ToastContainer>
        </div >

    );
};

export default Login;