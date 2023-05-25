import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProviders";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100  font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="w-16 animate-bounce" src="https://files.catbox.moe/i7uko7.png" alt="" />
                    <h1 className="text-red-500 font-bold animate-bounce">Deshi Khabar</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-red-500  text-white' : 'bg-white'}>Home</NavLink></li>
                    <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'bg-red-500 text-white' : 'bg-white'}>Blogs</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom " data-tip={user?.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleLogOut} className="btn btn-xs rounded-none bg-red-500 border-0  hover:bg-red-400  hover:border-white ">Sign Out</button>
                        </> : <Link to='/login'> <button className="btn  bg-red-500 border-0  hover:bg-red-400  hover:border-white  ">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;