import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import {Autoplay, Pagination, Navigation} from "swiper/modules";
const SwiperComponent = () => {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <Swiper loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            speed={800}
                            className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-slide second_slider">
                                <div className="second_slider-img img-slider"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide third_slider">
                                <div className="third_slider-img img-slider"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide fourth_slider">
                                <div className="fourth_slider-img img-slider"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide five_slider">
                                <div className="five_slider-img img-slider"></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
};

export default SwiperComponent;