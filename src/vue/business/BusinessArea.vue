<template>
    <div id="business">
        <div>
            <b-row class="p-3">
                <h4>사업영역</h4>
            </b-row>
            <b-row class="p-3">
                <b-col cols="12" md="4">
                    <div class="business-area">
                        <h5 class="circle">석가산</h5>
                        <ul>
                            <li>아파트</li>
                            <li>공공기관</li>
                        </ul>
                    </div>
                </b-col>
                <b-col cols="12" md="4">
                    <div class="business-area">
                        <h5 class="circle">산벽</h5>
                        <ul>
                            <li>아파트</li>
                            <li>공공기관</li>
                        </ul>
                    </div>
                </b-col>
                <b-col cols="12" md="4">
                    <div class="business-area">
                        <h5 class="circle">자재판매</h5>
                        <ul>
                            <li>기암괴석</li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div id="business-content">
            <b-row class="p-3">
                <h4>사업내용</h4>
            </b-row>
            <b-row class="p-3">
                <b-col cols="12" md="6" lg="3">
                    <h5 class="mb-3">디자인</h5>
                    <div class="circle-image">
                        <img src="../../assets/img/icons/si-glyph-brush-and-pencil.svg" alt="">
                    </div>
                    <ul>
                        <li>기본 및 실시설계</li>
                    </ul>
                </b-col>
                <b-col cols="12" md="6" lg="3">
                    <h5 class="mb-3">시공</h5>
                    <div class="circle-image">
                        <img src="../../assets/img/icons/si-glyph-shovel.svg" alt="">
                    </div>
                    <ul>
                        <li>석가산, 산벽 공사</li>
                    </ul>
                </b-col>
                <b-col cols="12" md="6" lg="3">
                    <h5 class="mb-3">유지관리</h5>
                    <div class="circle-image">
                        <img src="../../assets/img/icons/fountain.svg" alt="">
                    </div>
                    <ul>
                        <li>식물 및 수경시설 관리</li>
                    </ul>
                </b-col>
                <b-col cols="12" md="6" lg="3">
                    <h5 class="mb-3">제품판매</h5>
                    <div class="circle-image">
                        <img src="../../assets/img/icons/rock.svg" alt="">
                    </div>
                    <ul>
                        <li>기암괴석 판매</li>
                    </ul>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BusinessArea'
    }
</script>