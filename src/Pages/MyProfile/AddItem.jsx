import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddItem = () => {
    const { user } = useAuth()
    const axiosSecure=useAxiosSecure()
    const handleAddSpots =async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const discription = form.discription.value;
        const email = user.email
        const origin = form.origin.value;
        const category=form.foodCategory.value;
        const itemDetail = {
            name,
            quantity,
            photo,
            price,
            origin,
            discription,
            category,
            buyer:{
                email,
                name:user?.displayName,
                photo:user?.photoURL
            }
        }
        // send spot data to the server

        try{
            const{data}=await axiosSecure.post(`/items`,itemDetail)
            console.log(data);
            toast.success('data added successfully')
            form.reset()
        }

        catch(err){
            console.log(err);
        }



    }

    return (
        <div className="bg-gradient-to-r mt-10 from-pink-100 to-purple-200  rounded-md lg:mx-28 md:p-4 lg:p-8 p-4 pt-9 mx-3   border-2 border-blue-300 ">
            <h2 className="text-4xl text-center text-purple-500 relative bottom-5 font-semibold">Add Food Item</h2>
            <form onSubmit={handleAddSpots}>
                {/* Tourist spot and country row */}
                <div className="lg:flex md:flex mb-4 lg:gap-3">
                    <div className="form-control lg:w-1/2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name:</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Food Name"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="url"
                                name="photo"
                                placeholder="Food Image"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Location and Discription row */}
                <div className="lg:flex md:flex mb-4 lg:gap-3  ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Category</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="foodCategory"
                                className="select border border-blue-300 select-bordered w-full">
                                <option disabled selected>Select Food Category</option>
                                <option value="pizza">Pizza</option>
                                <option value="burger">Burger</option>
                                <option value="dessert">Dessert</option>
                                <option value="beverage">Beverage</option>
                            </select>
                        </label>
                    </div>

                </div>
                {/* consts and seasonality row */}
                <div className="lg:flex md:flex mb-4 lg:gap-3">
                    <div className="relative form-control md:w-1/2">
                        <label className="text-gray-700 " htmlFor="min_price">
                            Price
                        </label>
                        <input
                            id="min_price"
                            name="price"
                            placeholder="Price"
                            type="number"
                            className="border border-blue-300 block w-full pl-3 pr-4 py-3 mt-2 text-gray-700 bg-white  rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="form-control md:w-1/2 relative bottom-[3px] ">
                        <label className="label">
                            <span className="label-text">Added By</span>
                        </label>
                        <h1 className="bg-white pl-3 py-3 rounded-md border border-blue-300">{user?.email || 'loggedUser@gmail.com'}</h1>

                    </div>
                </div>
                {/* Travel time and visitor row */}
                <div className="lg:flex md:flex mb-4 lg:gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Origin</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="origin"
                                placeholder="Food Origin"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Discription</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="discription"
                                placeholder="discription"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add+" className="btn btn-block bg-purple-500 text-white text-xl" />

            </form>
        </div>
    );
};

export default AddItem;