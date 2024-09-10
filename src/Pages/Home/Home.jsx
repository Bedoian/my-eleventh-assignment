import Carousel from "../../Components/SwiperSlider/Carousel";
import HomeCard from "./HomeCard/HomeCard";


const Home = () => {
  
    return (
        <div >
           <div className="mt-4">
           <Carousel></Carousel>
           <HomeCard></HomeCard>
           </div>
        </div>
    );
};

export default Home;