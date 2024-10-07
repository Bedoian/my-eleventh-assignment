import {  useEffect, useState } from "react";
import ListCard from "./ListCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyAddedList = () => {
    const{user}=useAuth()
    const axiosSecure =useAxiosSecure()
    const[addedItem,setAddedItem]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            const{data}=await axiosSecure.get(`/myAdded/${user?.email}`)
           setAddedItem(data)
        }
        getData()
    },[])
    // console.log(addedItem);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-3">My Added Item:{addedItem.length}</h1>
          <ListCard allCard={addedItem}></ListCard>
        </div>
    );
};

export default MyAddedList;