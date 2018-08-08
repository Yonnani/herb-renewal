<template>
    <div>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="3000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                     src="https://picsum.photos/1024/480/?image=55" alt="image slot">
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image"></b-carousel-slide>

        </b-carousel>

        <div>
            <div class="d-flex justify-content-between m-3">
                <h5>포트폴리오</h5>
                <a href="#/portfolio">더보기</a>
            </div>
            <div class="d-flex justify-content-between m-3" style="height: 150px">
                <img src="https://picsum.photos/1024/480/?image=52" style="width: 25%"/>
                <img src="https://picsum.photos/1024/480/?image=54" style="width: 25%"/>
                <img src="https://picsum.photos/1024/480/?image=58" style="width: 25%"/>
                <img src="https://picsum.photos/1024/480/?image=55" style="width: 25%"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart () {
                this.sliding = true
            },
            onSlideEnd () {
                this.sliding = false
            }
        }
    }
</script>