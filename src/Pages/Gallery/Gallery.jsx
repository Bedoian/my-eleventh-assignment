import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Gallery = () => {
    const datas = useLoaderData()
    console.log(datas);
    return (
        <div className="mb-10">
            <h1 className="text-5xl my-4 text-purple-700 font-bold text-center">A Taste in Every Picture</h1>
            <div className="grid grid-cols-3 mx-28">
                {
                    datas.map(data => (
                        <div key={data._id} className="relative group mt-10">
                            <img
                                className="rounded-xl lg:w-96 lg:h-[400px]"
                                src={data.photo}
                                alt="User Image"
                            />

                            {/* Overlay with shadow matching image size */}
                            <div className="absolute inset-0 lg:w-96 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-xl">
                                <h1 className="text-2xl lg:text-4xl text-white font-bold">{data.name}</h1>
                                <p className="text-lg text-center text-white mt-2">{data.review}</p>
                            </div>
                        </div>
                    ))
                }



            </div>
            <div className="mx-28">
                <Modal></Modal>
            </div>
        </div>
    );
};

export default Gallery;