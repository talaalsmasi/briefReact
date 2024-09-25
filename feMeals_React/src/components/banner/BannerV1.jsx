import React from 'react';
import BannerV1Data from '@/assets/jsonData/banner/BannerV1Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, EffectFade } from 'swiper/modules';
import SingleBannerV1 from './SingleBannerV1';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-area banner-style-one navigation-circle overflow-hidden text-light">
                <div className="banner-fade">
                    <Swiper
                        modules={[Keyboard, Navigation, EffectFade]}
                        direction={'horizontal'}
                        loop={true}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                        speed={3000}
                        autoplay={false}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                    >
                        <div className="swiper-wrapper">
                            {BannerV1Data.map(banner =>
                                <SwiperSlide className="swiper-slide bg-cover shadow dark"
                                    style={{ background: `url(assets/img/banner/${banner.bgThumb})` }} key={banner.id}>
                                    <SingleBannerV1 banner={banner} />
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;