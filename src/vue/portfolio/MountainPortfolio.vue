<template>
    <div>
        <b-row class="p-3">
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'mountain_01.jpg')">
                    <img src="../../assets/img/business/mountain_01.jpg" alt="산벽1">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'mountain_02.jpg')">
                    <img src="../../assets/img/business/mountain_02.jpg" alt="산벽2">
                </a>
            </b-col>
            <b-col class="mb-1" cols="12" md="6" lg="4">
                <a href="#" @click="showFullSizeImg($event, 'mountain_03.jpg')">
                    <img src="../../assets/img/business/mountain_03.jpg" alt="산벽3">
                </a>
            </b-col>
        </b-row>
        <b-modal size="lg" v-model="imgDetailModal" header-close-label body-class="max-height-545">
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
    export default {
        name: 'Mountain',
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
                this.imgDetailPath = require(`./../../assets/img/business/${filename}`);
            }
        }
    }
</script>