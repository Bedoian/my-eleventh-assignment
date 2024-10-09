import ListCard from "./ListCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
            <h1 className="text-3xl font-bold text-center mt-3">My Added Item:{addedItem.length}</h1>
            <ListCard allCard={addedItem}></ListCard>
        </div>
    );
};

export default MyAddedList;