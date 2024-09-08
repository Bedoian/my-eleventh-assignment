import img1 from '../../../public/Image/Img1.jpg'
import img2 from '../../../public/Image/Img2.jpg'
import img3 from '../../../public/Image/Img3.jpg'
import img4 from '../../../public/Image/Img4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='flex justify-center'>
            <div className='lg:w-[1300px] w-[400px] lg:mx-0 mx-3'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{

                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><Slide p={"Experience an extraordinary journey through rich, diverse flavors, where every dish is crafted with passion and served with an unwavering commitment to excellence."} text={'Savor the Flavors of Excellence'} image={img1}></Slide></SwiperSlide>
                    <SwiperSlide><Slide p={"From the freshest ingredients to time-honored recipes, we bring the heart of culinary tradition to your table, delivering meals that are as memorable as they are delicious."} text={"Where Every Meal Tells a Story"} image={img2}></Slide></SwiperSlide>
                    <SwiperSlide><Slide p={"A perfect harmony of tradition and innovation, our menu is designed to captivate your senses and offer a dining experience that transcends the ordinary."} text={"Indulge in Culinary Perfection"} image={img3}></Slide></SwiperSlide>
                    <SwiperSlide><Slide p={"Sourced from the finest farms and prepared with meticulous care, each meal is a celebration of quality, authenticity, and a true love for food."} text={"A Taste of Tradition, A Touch of Innovation"} image={img4}></Slide></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
