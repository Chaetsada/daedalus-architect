import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex">
      <button
        className="w-[70px] h-[70px] flex justify-center items-center bg-primary-200  active:scale-95"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft className="w-5 h-5 text-white" />
      </button>
      <button
        className="w-[70px] h-[70px] flex justify-center items-center bg-primary-200  active:scale-95"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default SwiperButtons;
