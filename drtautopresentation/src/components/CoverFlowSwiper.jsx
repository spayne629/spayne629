import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

import img1 from '../assets/1.jpg';
import img2 from '../assets/bNs.jpg';
import img3 from '../assets/carinlane.jpg';
import img4 from '../assets/cel.jpg';
import img5 from '../assets/cooling.jpg';
import img6 from '../assets/electrical.jpg';
import img7 from '../assets/engine.jpg';
import img8 from '../assets/excellence.jpg';
import img9 from '../assets/trust.jpg';

const CoverFlowSwiper = () => {
    return (
      <>
          <div className="swiper-container">
            <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide id="slide1">
                    <img id="swiper-img" src={img1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide id="slide2">
                    <img id="swiper-img" src={img2} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide id="slide3">
                    <img id="swiper-img" src={img3} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide id="slide4">
                    <img id="swiper-img" src={img4} alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide id="slide5">
                    <img id="swiper-img" src={img5} alt="Slide 5" />
                </SwiperSlide>
                <SwiperSlide id="slide6">
                    <img id="swiper-img" src={img6} alt="Slide 6" />
                </SwiperSlide>
                <SwiperSlide id="slide7">
                    <img id="swiper-img" src={img7} alt="Slide 7" />
                </SwiperSlide>
                <SwiperSlide id="slide8">
                    <img id="swiper-img" src={img8} alt="Slide 8" />
                </SwiperSlide>
                <SwiperSlide id="slide1">
                    <img id="swiper-img" src={img9} alt="Slide 1" />
                </SwiperSlide>
            </Swiper>
        </div>
      </>
    );
};

export default CoverFlowSwiper;