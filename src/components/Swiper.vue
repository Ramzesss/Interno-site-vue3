<template>
    <swiper
    :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
        clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    >
    <swiper-slide>
        <div class="swiper-zoom-container">
        <img class="swiper-img" src="../../src/assets/img/Photo-swiper-1.png"  />
        </div> </swiper-slide><swiper-slide>
    </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



    export default {
        components: {
            Swiper,
            SwiperSlide,
        },

        setup() {
        return {
        modules: [Zoom, Navigation, Pagination],
        };
    },


    }
</script>

<style lang="scss" scoped>

</style>