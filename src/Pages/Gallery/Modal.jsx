import { useState } from 'react';
import img from '../../../public/Image/Exparience.png'
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const review = form.Exparience.value;
        const photo = form.photo.value;
        const reviewData = {
            name,
            photo,
            review
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/review`, reviewData)
            console.log(data);
            if(data.insertedId){
                toast.success('Review added Successfully')
                form.reset()
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="relative mt-10 ">
            {!isOpen && (
                <div className='border-2 p-4 lg:w-96 h-[400px] border-blue-400 rounded-md'>
                    <div onClick={() => setIsOpen(true)} className='mb-4'>
                        <img className=' relative left-8 lg:left-16 lg:w-52 h-52' src={img} alt="" />
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className=" relative left-10 lg:left-16 top-10 px-6 text-2xl py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                        <FaPlus className='relative left-20'></FaPlus> Add Exparience
                    </button>
                </div>
            )}

            {isOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl border-2 border-blue-400 dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h1 className='text-xl text-center text-blue-400 font-semibold'>Share Your Exparience With Us</h1>

                            <form onSubmit={handleSubmit} className="mt-4" action="#">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Your Name</label>
                                    <input
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                        name='name'
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Your Exparience</label>
                                    <input
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                        name='Exparience'
                                        type="text"
                                        placeholder="Your Exparience"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">PhotoURL of item</label>
                                    <input
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                        name='photo'
                                        type="url"
                                        placeholder="PhotoURL of item"
                                    />
                                </div>


                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="w-1/2  px-4 py-3 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Cancel
                                    </button>
                                    <div className='w-1/2'>
                                        <input className='btn bg-blue-500 text-white  w-full' type="submit" value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
