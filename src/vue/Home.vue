<template>
    <div>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    :interval="3000"
                    v-model="slide"
                    img-width="1200"
                    img-height="800"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
            <!--img-width="1024"-->
            <!--img-height="480"-->

            <b-carousel-slide v-for="image in images" :key="image.index">
                <img slot="img" class="d-block w-100 custom-fixed-image"
                     :src="getImgUrl(image.index)" alt="image slot">
            </b-carousel-slide>

        </b-carousel>

        <div>
            <div class="d-flex justify-content-between mt-4">
                <h5 class="mb-0">포트폴리오</h5>
                <router-link to="/portfolio">더보기</router-link>
            </div>
            <b-row class="d-flex justify-content-between my-3"><!-- style="height: 150px" -->
                <b-col v-for="image in images" :key="image.index" cols="6" md="3" class="mb-1">
                    <img :src="getImgUrl(image.index)" class=""
                         style="width: 100%; cursor: pointer;"
                         @click="selectPic(image.index)"/><!-- -->
                </b-col>
            </b-row>
        </div>

        <b-modal size="lg" v-model="showPopup" :hide-header="true">
            <!--<div slot="modal-header" class="w-100">-->
            <!--</div>-->
            <div class="text-center">
                <img src="../assets/img/home_popup.png" style="max-width: 100%;">
            </div>
            <div slot="modal-footer" class="w-100">
                <b-button size="sm" variant="secondary" class="float-right" @click="closePopup">닫기</b-button>
                <b-form-checkbox class="float-right"
                                 v-model="hideForWeek"
                                 :value="true"
                                 :unchecked-value="false">
                    일주일간 보지 않기
                </b-form-checkbox>
            </div>
        </b-modal>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'Home',
        mounted() {
            const hide = this.getCookie(this.cookieNameHidePopup);
            if (hide === 'true') {
                this.showPopup = false;
            } else {
                this.showPopup = true;
            }
            console.log({hide});
        },
        data () {
            return {
                hideForWeek: false,
                showPopup: false,
                cookieNameHidePopup: 'hidePopup',
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
            },
            closePopup() {
                this.showPopup = false;
                if (this.hideForWeek) {
                    this.setCookie(this.cookieNameHidePopup, 'true', 7);
                }
            },
            setCookie(cookieName, value, exp) {
                var date = new Date();
                date.setTime(date.getTime() + exp*24*60*60*1000);
                document.cookie = cookieName + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
            },
            getCookie(name) {
                var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
                return value? value[2] : null;
            },
            deleteCookie(name) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        }
    }
</script>

<style scoped>
    .custom-fixed-image {
        width: auto;
        height: auto;
        max-width: 1200px;
        max-height: 800px;
    }
</style>