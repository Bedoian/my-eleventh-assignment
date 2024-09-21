import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

const AllFoods = () => {
    const [allCard, setCard] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div>
            <div className="mt-8">
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
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

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100  transition-colors duration-300 transform bg-blue-400 rounded-md hover:bg-blue-500 focus:bg-blue-500 focus:outline-none'>
                                <p className="flex gap-2 font-semibold"> <span className="text-xl"><IoSearchOutline /></span><span>Search</span></p>
                            </button>
                        </div>
                    </form>
                    <div className="lg:block hidden">
                        <select
                            name='category'
                            id='category'
                            className='border border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 p-4 rounded-md'
                        >
                            <option value=''>Sort By Available</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button className='btn btn-ghost text-blue-400 border-2 border-blue-400 text-[17px] py-2 hover:bg-transparent hover:border-blue-400 '><span><GrPowerReset/></span> Reset</button>
                </div>
            </div>
            <h1 className="text-3xl mt-7 font-bold text-center">From Appetizers to Desserts: Full Menu</h1>

            <FoodCard allCard={allCard}></FoodCard>
        </div>
    );
};

export default AllFoods;