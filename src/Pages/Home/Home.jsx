import Footer from "../../Components/Footer";
import Carousel from "../../Components/SwiperSlider/Carousel";
import HomeCard from "./HomeCard/HomeCard";


const Home = () => {
  
    return (
        <div >
           <div className="mt-4">
           <Carousel></Carousel>
           <HomeCard></HomeCard>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;