import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { motion } from 'framer-motion';
import Footer from "../../Components/Footer";
const Gallery = () => {
    const datas = useLoaderData()
    console.log(datas);
    return (
        <div>
            <div className="mb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    transition={{ duration: 2 }}
                >
                    <h1 className="lg:text-4xl text-2xl my-4 text-purple-700 font-bold text-center">A Taste in Every Picture</h1>
                    <p className="text-xl lg:mx-20 mx-3 text-center font-semibold">Welcome to our gallery, where we invite you to experience the vibrant colors and rich flavors of our cuisine through stunning visuals. From our signature dishes to the cozy atmosphere, every photo tells a story of passion, creativity, and dedication to perfecting your dining experience.</p>
                </motion.div>
                <div className="grid lg:grid-cols-3 mx-4 lg:mx-28">
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
                <div className="lg:mx-28 mx-4">
                    <Modal></Modal>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;