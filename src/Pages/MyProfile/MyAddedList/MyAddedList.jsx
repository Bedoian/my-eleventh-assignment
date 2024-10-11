import ListCard from "./ListCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../../Components/Footer";

const MyAddedList = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: addedItem = [] } = useQuery({
        queryFn: () => getData()
    })
    const getData = async () => {
        const { data } = await axiosSecure.get(`/myAdded/${user?.email}`)
        return data
    }
    // console.log(addedItem);
    // if (loading) return 'loading'
    return (
        <div>
            <div>
                <h1 className="text-3xl mt-4 font-bold text-center text-purple-400 mt-3">My Added Item : {addedItem.length}</h1>
                <ListCard allCard={addedItem}></ListCard>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyAddedList;