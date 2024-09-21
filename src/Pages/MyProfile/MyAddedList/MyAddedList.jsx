import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ListCard from "./ListCard";

const MyAddedList = () => {
    const{user}=useContext(AuthContext)
    const[addedItem,setAddedItem]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/myAdded/${user?.email}`,{withCredentials:true})
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