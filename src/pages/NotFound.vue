<template>
    <Header />
    
    <div class="notfound__items center">
        <div class="notfound__info">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__subtitle">We are sorry, but the pageyou requested was not found</p>
            <a href="#" class="notfound__link">Back To Home<svg width="18.000000" height="16.000000" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M0.85 7.43L14.58 7.29M9.47 0.91L16 7.43L9.34 14.08" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
</svg>

            </a>
        </div>
        <div class="notfound__image">
            <img src="../assets/img/404.jpg" alt="">
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';


    export default {
        components: {
            Header
        }
    }
</script>

<style lang="sass" scoped>

</style>