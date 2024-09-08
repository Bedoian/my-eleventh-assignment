import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
    const{isOpen}=useContext(AuthContext)
    return (
        <div >
           <div className="mt-4">
           <h1 className={`transition-all duration-300 ${isOpen ? 'mt-60' : ''}`}>This is home</h1>
           </div>
        </div>
    );
};

export default Home;