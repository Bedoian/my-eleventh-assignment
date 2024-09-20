import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeCard = () => {
    const[cardCon,setCard]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/items`)
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className="mt-8">
        <h1 className="text-3xl my-4 font-bold text-center">Just Explore our top selling product</h1>
        <div className="grid mx-4 lg:mx-28 lg:grid-cols-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-3 lg:gap-8">
            {
                cardCon.slice(0,6).map(card => <div key={card._id} className=" bg-base-100 border-gray-300 rounded-xl border-2 shadow-xl">
                    <figure>
                        <img
                            className="rounded-t-lg"
                            src={card.photo}
                            alt="" />
                    </figure>
                    <div className=" p-4">
                        <p className=" text-center text-gray-500 text-xl font-semibold">{card.name}</p>
                        <div className="flex mx-6 justify-between gap-4 border-b-2 pb-3">
                            <button className="p-2 bg-green-100 text-green-600 rounded-full">#{card.category}</button>
                            <Link to={`/foodDetails/${card._id}`}>
                                <button className="btn btn-ghost rounded-full  text-red-400 mt-2 border-red-400">View Details</button>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-3">
                            <p className="text-lg">Price : {card.price} <span className="text-blue-500 text-lg font-bold">€</span></p>
                        </div>
                    </div>
                </div>)
            }
        </div>
        <div className="flex justify-center my-5 ">
         <Link to='/allFoods'>
         <button className="btn btn-ghost rounded-full text-white bg-blue-500">See All Cards <FaChevronRight/>
         </button>
         </Link>
        </div>
    </div>
    );
};

export default HomeCard;