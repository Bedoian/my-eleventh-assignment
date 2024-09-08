import { useContext, useEffect, useState } from 'react';
import icon from '../../public/Image/icons8-restaurant-96.png'
import imge from '../../public/Image/Head.avif'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import ProfileDropdown from './ProfileDropDown';
const Nav = () => {
    const { logOut, user ,setIsOpen,isOpen} = useContext(AuthContext)
    
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const webTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', webTheme)
    }, [theme])

    const toggleTheme = e => {
        if (e.target.checked) {
            setTheme('dim')
        }
        else {
            setTheme('light')
        }
    }
    const handleLogOut = () => {
        logOut()
        toast.success('logged out successfully')
    }
    return (
        <nav className="relative  lg:h-[80px]  bg-purple-300 shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className='flex'>
                            <img className="h-14 " src={icon} alt="Logo" />
                            <p className='text-2xl lg:block hidden font-semibold text-purple-800 relative top-3'>EliteEateries</p>
                        </div>


                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h14" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                                    </svg>



                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:text-start lg:border-none border-2 text-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="relative lg:left-80 flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <div className='lg:block hidden'>
                                <label onChange={toggleTheme} className="cursor-pointer grid place-items-center">
                                    <input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
                            </div>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                }>
                                Home
                            </NavLink>
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) =>
                                    `px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                }>
                                Gallery
                            </NavLink>
                            <NavLink
                                to="/allFoods"
                                className={({ isActive }) =>
                                    `px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                }>
                                All Foods
                            </NavLink>
                            <div className='flex justify-center'>
                                <ProfileDropdown></ProfileDropdown>
                            </div>

                            {
                                user ? <div className="flex items-center text-[17px] mt-4 lg:mt-0">
                                    <Link >
                                        <button
                                            onClick={handleLogOut}
                                            className="btn rounded-full text-white bg-pink-600 hidden mx-4 transition-colors duration-300 transform  hover:bg-pink-600 hover:border-2 hover:border-purple-500  border-2  border-purple-600 lg:block "
                                            aria-label="show notifications"
                                        >
                                            LogOut
                                        </button>
                                    </Link>

                                </div> : <div className="flex items-center text-[17px] mt-4 lg:mt-0">
                                    <Link to='/login'>
                                        <button
                                            className="btn rounded-full text-white bg-teal-300 hidden mx-4 transition-colors duration-300 transform  hover:bg-teal-300 hover:border-2 hover:border-purple-500  border-2  border-teal-300 lg:block "
                                            aria-label="show notifications"
                                        >
                                            Login
                                        </button>
                                    </Link>

                                </div>
                            }
                        </div>



                    </div>
                    {
                        user ? <div className='lg:block hidden'>
                            <button type="button" className=" flex items-center focus:outline-none">
                                <div className="w-14 h-14 overflow-hidden border-gray-400 rounded-full">
                                    <img
                                        src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />

                                </div>
                            </button>
                        </div> : <div className='lg:block hidden'>
                            <button type="button" className=" flex items-center focus:outline-none">
                                <div className="w-14 h-14 overflow-hidden border-gray-400 rounded-full">
                                    <img
                                        src={imge} className="object-cover w-full h-full" alt="avatar" />
                                </div>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;
