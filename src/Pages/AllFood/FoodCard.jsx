import { Link } from "react-router-dom";

const FoodCard = ({ allCard }) => {
    return (
        <div>
            <div className="grid lg:mx-28 lg:grid-cols-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-3 lg:mt-14 lg:gap-8">
                {
                    allCard.map(card => <div key={card._id} className=" bg-base-100 border-gray-300 rounded-xl border-2 shadow-xl">
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
                            <div className="flex justify-between mx-4 mt-3">
                                <p className="text-lg">Price : {card.price} <span className="text-blue-500  text-lg font-bold">€</span></p>
                                <h1 className="text-lg text-blue-400">
                                    Available : {card.quantity}
                                </h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FoodCard;