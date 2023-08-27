import React, { useEffect } from 'react';
import styles from './Carousel.module.css';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import LeftNavigation from './LeftNavigation/LeftNavigation'; 
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation}}
        slidesPerView={'auto'}
        paceButton={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigation /> 
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;