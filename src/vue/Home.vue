<template>
    <div>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    :interval="3000"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
            <!--img-width="1024"-->
            <!--img-height="480"-->

            <b-carousel-slide v-for="image in images" :key="image.index">
                <img slot="img" class="d-block w-100 custom-fixed-image"
                     style=""
                     :src="getImgUrl(image.index)" alt="image slot">
            </b-carousel-slide>

        </b-carousel>

        <div>
            <div class="d-flex justify-content-between m-3">
                <h5>포트폴리오</h5>
                <a href="#/portfolio">더보기</a>
            </div>
            <b-row class="d-flex justify-content-between m-3" style="height: 150px">
                <b-col v-for="image in images" :key="image.index">
                    <img :src="getImgUrl(image.index)" class=""
                         style="width: 100%; cursor: pointer;"
                         @click="selectPic(image.index)"/><!-- -->
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'Home',
        mounted() {
        },
        data () {
            return {
                slide: 0,
                sliding: null,
                images: [
                    {
                        index: 1,
                        src: '/img/main_01.jpg'
                    },
                    {
                        index: 2,
                        src: '/img/main_02.jpg'
                    },
                    {
                        index: 3,
                        src: '/img/main_03.jpg'
                    },
                    {
                        index: 4,
                        src: '/img/main_04.jpg'
                    }
                ]
            }
        },
        methods: {
            onSlideStart () {
                this.sliding = true
            },
            onSlideEnd () {
                this.sliding = false
            },
            getImgUrl(index) {
                return require(`./../assets/img/main_0${index}.jpg`);
            },
            selectPic(index) {
                this.slide = index - 1;
            }
        }
    }
</script>

<style scoped>
    .custom-fixed-image {
        width: auto;
        height: auto;
        max-width: 1024px;
        max-height: 480px;
    }
</style>