<template>
    <div>
        <b-row class="p-3">
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'portfolio-ah-05.jpg')">
                    <img src="./../../assets/img/portfolio-ah-05.jpg">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'portfolio-ah-06.jpg')">
                    <img src="./../../assets/img/portfolio-ah-06.jpg">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'portfolio-ah-04.jpg')">
                    <img src="./../../assets/img/portfolio-ah-04.jpg">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'portfolio-ah-03.jpg')">
                    <img src="./../../assets/img/portfolio-ah-03.jpg">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'artificial-hill-03.jpg')">
                    <img src="./../../assets/img/artificial-hill-03.jpg">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'portfolio-ah-02.jpg')">
                    <img src="./../../assets/img/portfolio-ah-02.jpg">
                </a>
            </b-col>
        </b-row>
        <b-modal size="lg" v-model="imgDetailModal" header-close-label>
            <div slot="modal-header">
                Portfolio
            </div>
            <img :src="imgDetailPath" class="w-100">
            <div slot="modal-footer" class="mt-0 px-2">
                <b-btn variant="default" class="float-right" @click="imgDetailModal=false">닫기</b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'ArtificialHill',
        data() {
            return {
                imgDetailModal: false,
                imgDetailPath: ''
            }
        },
        methods: {
            showFullSizeImg(e, filename) {
                e.preventDefault();
                this.imgDetailModal = true;
                this.imgDetailPath = require(`./../../assets/img/${filename}`);
            }
        }
    }
</script>