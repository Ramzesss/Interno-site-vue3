<template>
<Header />

<div class="project__details-top-image">
    <img src="../assets/img/projectDetails-top.png" alt="">
</div>
<div class="project__details-body center">
<div class="project__details-body-info">
    <h2 class="project__details-body-title">{{ projectDetails.title }}</h2>
    <div class="project__details-body-subtitle">
        <p class="project__details-body-text">{{ projectDetails.description }}</p>
    </div>
</div>
<div class="project__details-body-swiper">
    
</div>
</div>

<Swiper />


<Footer />
</template>




<script>





import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Swiper from '@/components/Swiper.vue';
import { mapGetters } from 'vuex'

    export default {

        components: {
        Header,
        Footer,
        Swiper,
    },
    computed: {
    ...mapGetters(['projectDetails']),
    },
    }
</script>

<style lang="scss" scoped>

</style>