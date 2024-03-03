<template>
    <Header />
    <div class="tags__body center">
        <div class="tags__item" v-for="detail in filteredDetails" :key="detail.id">
            <h2 class="tags__name">Let’s Get Solution for Building Construction Work</h2>
            <img class="tags__top-img" :src="detail.imgOne" alt="">
            <div class="tags__date">
                <p class="date__num">{{ detail.date }}</p>
                <p class="date__text">Interior / Home / Decore</p>
            </div>
            <p class="tags__text">
                {{ detail.description }}
            </p>
            <img src="../assets/img/Quotes-tag.png" alt="" class="tags__body-img">
            <h2 class="tags__name-bottom">Design sprints are great</h2>
            <p class="tags__text-bottom">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered.</p>
            <div class="tags__account">
                <div class="tags__account-item">
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.56 13V12.8L1.34 12.56C1.84667 12.3867 2.1 12.0467 2.1 11.54V1.86L0.48 2.08V1.82C1.26667 1.66 2.02 1.43333 2.74 1.14C3.47333 0.846666 4.16 0.506666 4.8 0.119999L5.06 0.299999L4.98 3.16V11.54C4.98 12.06 5.23333 12.3933 5.74 12.54L6.56 12.8V13H0.56Z"
                            fill="#CDA274" />
                    </svg>
                    <p class="account__text">Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="tags__account-item">
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.38 3.68L0.52 0.839999C0.92 0.613333 1.41333 0.42 2 0.26C2.6 0.0999992 3.27333 0.019999 4.02 0.019999C5.08667 0.019999 5.94667 0.173332 6.6 0.479999C7.25333 0.773333 7.73333 1.18 8.04 1.7C8.34667 2.22 8.5 2.80667 8.5 3.46C8.5 4.38 8.05333 5.28 7.16 6.16C6.26667 7.02667 5.04667 7.98667 3.5 9.04C3.20667 9.25333 2.86 9.51333 2.46 9.82C2.06 10.1267 1.68667 10.4267 1.34 10.72H8.84V13H0.04V11.32C0.52 10.8533 0.986667 10.3933 1.44 9.94C1.90667 9.47333 2.34667 9.03333 2.76 8.62C3.72 7.63333 4.43333 6.76 4.9 6C5.38 5.22667 5.62 4.4 5.62 3.52C5.62 2.6 5.45333 1.86 5.12 1.3C4.78667 0.726666 4.28667 0.44 3.62 0.44C3.20667 0.44 2.82 0.546666 2.46 0.759999C2.11333 0.96 1.80667 1.31333 1.54 1.82L0.58 3.68H0.38Z"
                            fill="#CDA274" />
                    </svg>

                    <p class="account__text">Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="tags__account-item">
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.08 13.3C3.18667 13.3 2.45333 13.2 1.88 13C1.32 12.8 0.766667 12.5667 0.22 12.3L0.44 9.7H0.64L1.52 11.32C2.10667 12.3733 2.92 12.9 3.96 12.9C4.57333 12.9 5.06667 12.6467 5.44 12.14C5.82667 11.62 6.02 10.7533 6.02 9.54C6.02 8.48667 5.86 7.73333 5.54 7.28C5.22 6.81333 4.67333 6.58 3.9 6.58H2.7V6.18H3.76C4.46667 6.18 4.97333 5.96667 5.28 5.54C5.6 5.11333 5.76 4.37333 5.76 3.32C5.76 2.29333 5.60667 1.56667 5.3 1.14C4.99333 0.699999 4.58667 0.479999 4.08 0.479999C3.57333 0.479999 3.14667 0.626666 2.8 0.919999C2.46667 1.21333 2.19333 1.56 1.98 1.96L1.08 3.64L0.88 3.62L1.08 0.679999C1.50667 0.493332 1.98 0.339999 2.5 0.219999C3.03333 0.0866656 3.62667 0.019999 4.28 0.019999C5.68 0.019999 6.74 0.326666 7.46 0.939999C8.19333 1.54 8.56 2.29333 8.56 3.2C8.56 3.85333 8.28 4.48 7.72 5.08C7.16 5.66667 6.28 6.07333 5.08 6.3C6.44 6.42 7.42667 6.78667 8.04 7.4C8.65333 8.01333 8.96 8.75333 8.96 9.62C8.96 10.3133 8.76 10.94 8.36 11.5C7.97333 12.06 7.41333 12.5 6.68 12.82C5.96 13.14 5.09333 13.3 4.08 13.3Z"
                            fill="#CDA274" />
                    </svg>

                    <p class="account__text">Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.</p>
                </div>
            </div>
            <img :src="detail.imgTwo" alt="" class="tags__bottom-img">
            <p class="tags__bottom-text">{{ detail.descriptionTwo }}</p>
        </div>
        <div class="tags__button">
            <h3 class="tags__btn-name">Tags</h3>
            <!-- <div class="tags__btn">
                <div class="btn__position">
                    <button @click="clickOnTag('Kitchen')" class="tags__link">Kitchen</button>
                    <button @click="clickOnTag('Bedroom')" class="tags__link">Bedroom</button>
                </div>
                <div class="btn__position">
                    <button @click="clickOnTag('Building')" class="tags__link">Building</button>
                    <button @click="clickOnTag('Architecture')" class="tags__link">Architecture</button>
                </div>
                <div class="btn__position">
                    <button @click="clickOnTag('Kitchen Planning')" class="tags__link">Kitchen Planning</button>
                    <button @click="clickOnTag('BedroomTwo')" class="tags__link">Bedroom</button>
                </div>
            </div> -->
            <div class="btn__position">
<button class="tags__link" @click="clickOnTag(tag)" v-for="tag in tags" :key="tag.id"> {{ tag }} </button>
            </div>
            
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
            tags: ['Kitchen', 'Bedroom', 'Kitchen Planning', 'Architecture', 'Building', 'Bedroom'],
            selectedDetails: [],
            details: [
                {
                    name: ['Kitchen'],
                    imgOne: require('../assets/img/kitchen-1.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    date: "26 December,2022",
                    imgTwo: require('../assets/img/kitchen-2.png'),
                    descriptionTwo: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    name: ["Kitchen Planning"],
                    imgOne: require('../assets/img/kitchenpl-1.jpg'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.',
                    date: "16 December,2023",
                    imgTwo: require('../assets/img/kitchenpl-2.jpg'),
                    descriptionTwo: 'Lorem ipsum dolor sit amet',
                },
                {
                    name: ["Bedroom"],
                    imgOne: require('../assets/img/bed-1.jpg'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.',
                    date: "12 July,2023",
                    imgTwo: require('../assets/img/bed-2.jpg'),
                    descriptionTwo: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    name: ["BedroomTwo"],
                    imgOne: require('../assets/img/bed-3.jpg'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing.',
                    date: "13 September,2021",
                    imgTwo: require('../assets/img/bed-4.jpg'),
                    descriptionTwo: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    name: ["Architecture"],
                    imgOne: require('../assets/img/archi-1.jpg'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    date: "11 June,2023",
                    imgTwo: require('../assets/img/archi-2.jpg'),
                    descriptionTwo: 'Lorem ipsum dolor sit amet, adipiscing Aliquam.',
                },
                {
                    name: ["Building"],
                    imgOne: require('../assets/img/build-1.jpg'),
                    description: 'Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                    date: "12 December,2022",
                    imgTwo: require('../assets/img/build-2.jpg'),
                    descriptionTwo: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ]
        }
    },

    mounted() {
        this.selectedDetails = this.details;

    },

    methods: {
        clickOnTag(name) {
            const result = this.details.filter((tag) => tag.name.includes(name));
            this.selectedDetails = result;
        },

    },
    
    computed: {
        filteredDetails() {
            return this.selectedDetails.slice(0, 1);
        },
    },

};
</script>

<style lang="scss" scoped></style>