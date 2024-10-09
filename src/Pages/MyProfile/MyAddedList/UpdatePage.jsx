import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
const UpdatePage = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const data = useLoaderData()
    const { name, quantity, photo, origin, price, discription, category, _id } = data
    const navigate = useNavigate()
    const { mutateAsync } = useMutation({
        mutationFn: async (anotherDAta) => {
            const { data } = await axiosSecure.put(`/myAddedItem/${anotherDAta.id}`, anotherDAta)
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Item updated Successfully')
                navigate('/myAddedList')
            }
        }

    })

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const discription = form.discription.value;
        const origin = form.origin.value;
        const category = form.foodCategory.value;
        const updatedItem = {
            name,
            photo,
            quantity,
            price,
            discription,
            origin,
            category,
            seller: {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        // console.log(updatedItem);
        const anotherData = {
            id: _id,
            ...updatedItem
        }
        console.log('anotherDAta', anotherData);
        try {

            // console.log(updatedItem,'in 43');
            await mutateAsync(anotherData)


        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="bg-gradient-to-r mt-10 from-pink-50 to-pink-100  rounded-md lg:mx-28 md:p-4 lg:p-8 p-4 pt-9 mx-3   border-2 border-pink-300">
            <h2 className="text-4xl text-center text-pink-500 relative bottom-5 font-semibold">Update Added Food Item</h2>
            <form onSubmit={handleUpdate}>
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
                                defaultValue={name}
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
                                defaultValue={photo}
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
                                defaultValue={quantity}
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
                                defaultValue={category}
                                className="select border border-blue-300 select-bordered w-full">
                                <option disabled selected>Select Food Category</option>
                                <option value="burger">Burger</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="beverage">Beverage</option>
                                <option value="soups">Soups</option>
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
                            defaultValue={price}
                            placeholder="Price"
                            type="number"
                            className="border border-blue-300 block w-full pl-3 pr-4 py-3 mt-2 text-gray-700 bg-white  rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="relative form-control md:w-1/2">
                        <label className="text-gray-700 " htmlFor="min_price">
                            Added By:
                        </label>
                        <input
                            id="min_price"
                            name="addedBy"
                            defaultValue={user?.email}
                            placeholder="Added By"
                            type="email"
                            className="border border-blue-300 block w-full pl-3 pr-4 py-3 mt-2 text-gray-700 bg-white  rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
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
                                defaultValue={origin}
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
                                defaultValue={discription}
                                name="discription"
                                placeholder="discription"
                                className="input border border-blue-300 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block bg-pink-500 text-white text-xl" />

            </form>
        </div>
    );
};

export default UpdatePage;