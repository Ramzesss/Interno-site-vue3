<template>
    <Header />

    <div class="blog__top-item ">
        <div class="blog__top-title ">
            <h2 class="blog__top-name">Articles & News</h2>
            <div class="blog__top-link">
                <a class="blog__top-btn" href="index.html">Home</a>
                <p class="blog__top-slash">/</p>
                <a class="blog__top-btn" href="blog.html">Blog</a>
            </div>
        </div>

    </div>

    <div class="blog__body center">
        <h2 class="blog__body-name">Latest Post</h2>
        <div class="blog__body-item">
            <img src="../../assets/img/blog-body.png" alt="">
            <div class="blog__body-columns">
                <h3 class="blog__body-title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="blog__body-subtitle">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief. </p>
                <p class="blog__body-subtitle">Lorem Ipsum is not simply random text. It has roots in a piece of
                    classica.</p>
                <div class="blog__body-date">
                    <p>26 December,2022</p>
                    <a href="blog-details.html">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </div>

    <div class="cart__items center">
        <h2 class="cart__name">Articles & News</h2>
        <div class="cart__items-columns">
            <div v-for="item in newObj" class="bottom__col">
                <div class="img__box">
                    <img class="bottom__col-img" :src="item.img" alt="">
                    <p class="designe__info">{{ item.design }}</p>
                </div>
                <div class="bottom__col-name">
                    <h2 class="col__name">{{ item.nameOne }}</h2>
                    <h2 class="col__name">{{ item.nameTwo }}</h2>
                    <h2 class="col__name">{{ item.nameThree }}</h2>
                </div>
                <div class="col__item-link">
                    <p class="col__text">{{ item.data }}</p>
                    <a href="blog-details.html">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="project__pagination">
            <div v-for="pagination in paginations" :key="pagination.id" class="project__pagination-num"> {{ pagination }}</div>
        </div>
    </div>

    <Footer />
</template>





<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';



export default {

    components: {
        Header,
        Footer
    },
    data() {
                return {
                    paginations: [1, 2, 3, '>'],
                    newObj: [
                        {
                            img: require('../../assets/img/bot-1.png'),
                            nameOne: 'Let’s Get Solution For',
                            nameTwo: 'Building Construction',
                            nameThree: 'Work',
                            data: '26 December,2022 ',
                            design: 'Kitchan Design',
                        },
                        {
                            img: require('../../assets/img/bot-2.png'),
                            nameOne: 'Low Cost Latest Invented ',
                            nameTwo: 'Interior Designing',
                            nameThree: 'Ideas.',
                            data: '22 December,2022 ',
                            design: 'Living Design',
                        },
                        {
                            img: require('../../assets/img/bot-3.png'),
                            nameOne: 'Best For Any Office &',
                            nameTwo: 'Business Interior',
                            nameThree: 'Solution',
                            data: '25 December,2022',
                            design: 'Interior Design',
                        },
                        {
                            img: require('../../assets/img/bot-4.png'),
                            nameOne: 'Let’s Get Solution For',
                            nameTwo: 'Building Construction',
                            nameThree: 'Work',
                            data: '26 December,2022 ',
                            design: 'Kitchan Design',
                        },
                        {
                            img: require('../../assets/img/bot-5.png'),
                            nameOne: 'Low Cost Latest Invented ',
                            nameTwo: 'Interior Designing',
                            nameThree: 'Ideas.',
                            data: '22 December,2022 ',
                            design: 'Living Design',
                        },
                        {
                            img: require('../../assets/img/bot-6.png'),
                            nameOne: 'Best For Any Office &',
                            nameTwo: 'Business Interior',
                            nameThree: 'Solution',
                            data: '25 December,2022',
                            design: 'Interior Design',
                        },
                    ],
                };
            },

}


</script>

<style lang="scss" scoped></style>