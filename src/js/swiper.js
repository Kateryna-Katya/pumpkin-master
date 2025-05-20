import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.play-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.02,
                spaceBetween: 15,
            },
            1439: {
                slidesPerView: 3.2,
                spaceBetween: 32,
            },
        },
        loop: true,
        slideClass: 'play-swiper-slide',
        wrapperClass: 'play-swiper-wrapper',
        direction: 'horizontal',

    });
});