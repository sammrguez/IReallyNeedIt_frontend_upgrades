import React from "react";

/* modulos  */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

/* estilos */
import "swiper/css";
import "swiper/css/pagination";

function Carousell() {
  return (
    <Swiper
      className="swiper"
      slidesPerView={"auto"}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      effect="fade"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    // <div className="swiper">
    //   <div className="swiper__wrapper">
    //     <div className="swiper__slide">Slide 1</div>
    //     <div className="swiper__slide">Slide 2</div>
    //     <div className="swiper__slide">Slide 3</div>
    //     ...
    //   </div>

    //   <div className="swiper-pagination"></div>

    //   <div className="swiper-button-prev"></div>
    //   <div className="swiper-button-next"></div>

    //   <div className="swiper-scrollbar"></div>
    // </div>
  );
}

export default Carousell;
