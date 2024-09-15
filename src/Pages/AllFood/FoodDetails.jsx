import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const data = useLoaderData()
    return (
        <div className=" mt-24  min-h-screen">
            <div className="flex flex-col lg:mx-9 lg:flex-row">
                <div className="w-1/2">
                    <img
                        className="lg:w-[700px] lg:rounded-lg "
                        src={data.photo} />
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold">{data.name}</p>
                    <h1 className="text-xl border-b-2 border-blue-400 border-dashed pb-3 font-semibold text-gray-600 my-3"><span className="text-xl font-bold text-blue-800">About:</span> {data.discription}</h1>
                    <div className="flex justify-between border-b-2 border-dashed border-blue-400 pb-2">
                        <p className="font-semibold text-xl text-orange-400"><span className="text-black text-xl font-semibold">Made by : </span>{data.buyer.name}</p>
                        <p className="font-semibold bg-green-100  p-2 rounded-full text-green-500">#{data.category}</p>
                    </div>
                    <div className="flex justify-between mt-5 border-b-2 border-dotted border-orange-500 pb-3">
                        <p className="text-blue-700 text-xl font-bold bg-blue-100 p-2 rounded-full">Price : {data.price}</p>
                        <h1 className="text-xl text-purple-500 font-semibold">Food Origin : {data.origin}</h1>
                    </div>
                    <div className="flex justify-center ">
                   <Link to={`/purchase/${data._id}`}>
                   <button className="btn mt-6 text-xl btn-ghost border-orange-500 border-2 rounded-full text-orange-500">Purchase</button>
                   </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;