import "./MainSlider.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainSlider() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={slide1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3}></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MainSlider;
