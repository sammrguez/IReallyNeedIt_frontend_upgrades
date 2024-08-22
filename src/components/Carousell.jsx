import React from "react";
import promo2 from "../images/ajolote.jpg";
import promo3 from "../images/more_amore.jpg";
import promo4 from "../images/snoopy3.jpg";

/* modulos  */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";

/* estilos */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Carousell() {
  return (
    <Swiper
      className="swiper"
      slidesPerView={1}
      loop={true}
      spaceBetween={30}
      // keyboard={{
      //   enabled: true,
      // }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="swiper__slide">
          <div className="swiper__slide-photo-container">
            <img className="swiper__slide-photo" src={promo2} />
          </div>

          <h2 className="swiper__slide-header">
            El animal Méxicano que dio la vuelta al mundo!
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide">
          <div className="swiper__slide-photo-container">
            <img className="swiper__slide-photo" src={promo3} />
          </div>

          <h2 className="swiper__slide-header">
            {" "}
            Lleva todo el estilo italiano en tu celular.{" "}
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide">
          <div className="swiper__slide-photo-container">
            <img className="swiper__slide-photo" src={promo4} />
          </div>

          <h2 className="swiper__slide-header">
            {" "}
            El perrito favorito de muchos para proteger tus earpods
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousell;
