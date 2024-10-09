import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight, } from "react-icons/fa6"
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AllFoods = () => {
    const axiosSecure = useAxiosSecure()
    const [allCard, setCard] = useState([])
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 3
    // getData
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosSecure(`/all-items?page=${currentPage}&size=${itemPerPage}&filter=${filter}&sort=${sort}`)
            setCard(data)
        }
        getData()
    }, [currentPage, filter, sort])
    // get count
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosSecure(`/items-count?filter=${filter}`)
            setCount(data.count)
        }
        getData()
    }, [filter])

    // handle Pagination button
    const handlePaginationButton = value => {
        setCurrentPage(value)
    }
    // icon rotate button 
    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    // console.log(currentPage);
    // handle Reset button
    const handleReset = () => {
        setFilter('')
    }
    console.log(sort);
    return (
        <div>
            <div className="mt-8">
                <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                    <div>
                        <select
                            onChange={e => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            name='category'
                            id='category'
                            className='border focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-300 p-4 border-blue-300 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value="pizza">Pizza</option>
                            <option value="burger">Burger</option>
                            <option value="dessert">Dessert</option>
                            <option value="beverage">Beverage</option>
                        </select>
                    </div>

                    <form>
                        <div className='flex p-1 overflow-hidden border border-blue-300 rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder=' Food Title'
                                aria-label='Food Title'
                            />

                            <button
                                className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100  transition-colors duration-300 transform bg-blue-400 rounded-md hover:bg-blue-500 focus:bg-blue-500 focus:outline-none'>
                                <p className="flex gap-2 font-semibold"> <span className="text-xl"><IoSearchOutline /></span><span>Search</span></p>
                            </button>
                        </div>
                    </form>
                    <div className="lg:block hidden">
                        <select
                            onChange={e => {
                                setSort(e.target.value)
                            }}
                            name='category'
                            id='category'
                            className='border border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 p-4 rounded-md'
                        >
                            <option value=''>Sort By Available</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button onClick={handleReset} className='btn btn-ghost text-blue-400 border-2 border-blue-400 text-[17px] py-2 hover:bg-transparent hover:border-blue-400 '><span><GrPowerReset /></span> Reset</button>
                </div>
            </div>
            <h1 className="text-3xl mt-7 font-bold text-center">From Appetizers to Desserts: Full Menu</h1>

            <FoodCard allCard={allCard}></FoodCard>
            {/* pagination */}
            <div className='flex justify-center mt-12 mb-10'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => { handlePaginationButton(currentPage - 1) }}
                    className={` btn px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-purple-400 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-purple-500 hover:text-white`}>
                    <div className='flex items-center -mx-1'>
                        <div className="relative top-[1px]">
                            <FaArrowLeft />
                        </div>
                        <span className='mx-1'>Last</span>
                    </div>
                </button>
                <div className="">
                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlePaginationButton(btnNum)}
                            key={btnNum}
                            className={`${currentPage === btnNum ? 'bg-purple-400 text-white' : ''} btn btn-ghost  border-2 border-purple-400 text-purple-500 hidden px-5 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-purple-400  hover:text-white`}
                        >
                            {btnNum}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    disabled={currentPage === numberOfPages}
                    className='btn px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-purple-400 rounded-md hover:bg-purple-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Advance</span>
                        <div className="relative top-[1px]">
                            <FaArrowRight />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllFoods;