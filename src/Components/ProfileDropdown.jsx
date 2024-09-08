import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700">
                My Profile
                <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            
            {isOpen && (
                <div className="absolute border border-purple-400 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                    <NavLink
                        to="/myAddedList"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-300 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-purple-300 font-semibold' : ''
                            }`
                        }>
                        My Added Items
                    </NavLink>
               <div className=' border-y-[1px] border-purple-400'>
               <NavLink
                        to="/addItem"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-300 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-purple-300 text-purple-600 font-semibold' : ''
                            }`
                        }>
                        Add an Item
                    </NavLink>
               </div>
                    <NavLink
                        to="/myOrder"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-300 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-purple-300  text-purple-600 font-semibold' : ''
                            }`
                        }>
                        My Ordered Items
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
