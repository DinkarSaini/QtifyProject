import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftArrow } from '../../../assests/LeftArrow.svg';
import styles from './LeftNavigation.module.css';

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigation;
