import {  useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPurchase = () => {
    const axiosSecure=useAxiosSecure()
    const { user } = useAuth()
    const [datas, setData] = useState([])

    useEffect(() => {
        getData()
    }, [user])
    // console.log(datas);
    const getData=async()=>{
        const {data}=await axiosSecure.get(`/purchaseItem/${user?.email}`)
        setData(data)
    }

    const handleDelete=async(id)=>{
        try{
            const{data}=await axios.delete(`${import.meta.env.VITE_API_URL}/purchase/${id}`)
            console.log(data);
            getData()
            toast.success('Deleted Successfully')
        }
        catch(err){
            console.log(err);
            toast.error(err.message)
        }
    }
    return (
        <div className="flex lg:justify-center">
            <section className='container px-4 lg:max-w-[1450px] pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        05 Requests
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden    md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-pink-200 border-2 border-pink-300'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-left rtl:text-right '
                                            >
                                                <div className='flex text-[17px] font-semibold text-black items-center gap-x-3'>
                                                    <span>Food Image</span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-[17px] font-normal text-left rtl:text-righ text-black '
                                            >
                                                <div className='flex font-semibold items-center gap-x-3'>
                                                    <span>Food Name</span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex text-[17px] font-semibold text-blue-500 items-center gap-x-3'>
                                                    <span>Price</span>
                                                </div>
                                            </th>


                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-left rtl:text-right'
                                            >
                                                <button className='flex text-[17px] font-semibold text-purple-500 items-center gap-x-2'>
                                                    <span>Owner Name</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-[17px] font-semibold text-red-500 text-left rtl:text-right '
                                            >
                                                Owner Email
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5  text-[17px] font-semibold text-black text-left rtl:text-right '
                                            >
                                                Date
                                            </th>

                                            <th className='px-4 py-3.5  text-left rtl:text-right text-[17px] font-semibold text-black'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white   '>
                                        {/* map will start form here */}
                                        {
                                            datas.map(data => <tr className="border-x-2 border-pink-300 border-y-2" key={data._id}>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className="">
                                                <img className="lg:w-[200px] rounded-md" src={data.photo} alt="" />
                                                </div>
                                                </td>
                                                <td className='px-4 py-4 text-[17px] text-black font-bold  whitespace-nowrap'>
                                                    {data.food_name}
                                                </td>

                                                <td className='px-4 py-4 text-sm whitespace-nowrap text-[17px] font-semibold text-blue-500'>
                                                € {data.price}
                                                </td>

                                                <td className='px-4 py-4 font-semibold whitespace-nowrap text-[15px] text-purple-500  '>
                                                    {data.buyer.name}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex text-red-500 text-[15px] font-semibold items-center gap-x-2'>
                                                        {data.buyer.email}
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                    {data.date}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex text items-center gap-x-6'>
                                                        <button onClick={()=>handleDelete(data._id)} className="text-sm btn btn-ghost font-semibold p-2 rounded-full text-white bg-red-500">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyPurchase;