import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AllFoods = () => {
    const[allCard,setCard]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div>

            <h1 className="text-3xl mt-7 font-bold text-center">From Appetizers to Desserts: Full Menu</h1>

            <FoodCard allCard={allCard}></FoodCard>
        </div>
    );
};

export default AllFoods;