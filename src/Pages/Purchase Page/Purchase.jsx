import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import moment from 'moment';
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const MyPurchase = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const data = useLoaderData()
    const [purchaseCount, setPurchaseCount] = useState(0)
    const [quantity, setQuantity] = useState(data.quantity)
    const purchaseDate = moment().format("DD/MM/YYYY")

    const handlePurchase = async () => {
        setQuantity(quantity - 1)
        setPurchaseCount(purchaseCount + 1)

        const purchaseData = {
            food_name: data.name,
            photo: data.photo,
            price: data.price,
            buyer: {
                name: user?.displayName,
                email: user?.email
            },
            date: purchaseDate,
            count: {
                quantity: quantity - 1,
                pCount: purchaseCount + 1
            }

        }
        console.log(purchaseCount);
        console.log(purchaseData);

        // post oparaion if purchaseCount<1

        try {
            const { data } = await axiosSecure.post(`/myPurchase`, purchaseData)
            console.log(data);
            toast.success('Item added to the Purchase List')

        }
        catch (err) {
            console.log(err);
        }


    }

    console.log(data);
    return (
<div>
<div>
            <div className="flex lg:justify-center">
                <section className='container px-4 lg:w-[1500px] pt-12'>
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

                        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                            05 Requests
                        </span>
                    </div>

                    <div className='flex flex-col mt-6'>
                        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                <div className='overflow-hidden border border-pink-3j00 md:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-pink-200'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <div className='flex items-center gap-x-3'>
                                                        <span>Food Name</span>
                                                    </div>
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <div className='flex items-center gap-x-3'>
                                                        <span>Price</span>
                                                    </div>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <span>Quantity</span>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    <button className='flex items-center gap-x-2'>
                                                        <span>Buyer Name</span>
                                                    </button>
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    Buyer Email
                                                </th>

                                                <th
                                                    scope='col'
                                                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                >
                                                    Date
                                                </th>

                                                <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200 '>
                                            <tr>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {data.name}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {data.price}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {quantity}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {user?.displayName}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        {user?.email}
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                    {purchaseDate}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex text items-center gap-x-6'>
                                                        <button onClick={() => handlePurchase(data._id)} className="text-sm btn btn-ghost font-semibold p-2 rounded-full text-white bg-red-500">Purchase</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</div>
    )
}

export default MyPurchase