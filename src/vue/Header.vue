<template>
    <header class="header">
        <!--<div class="d-flex justify-content-between">-->
        <b-row>
            <b-col cols="12" sm="4">
                <router-link to="/">
                    <img src="./../assets/logo.png" />
                </router-link>
            </b-col>
            <b-col cols="12" sm="8" class="text-right">
                <div class="d-flex flex-column">
                    <b-nav class="d-flex justify-content-end">
                        <b-nav-item to="/">홈으로</b-nav-item>
                        <b-nav-item to="/customer/estimate">견적문의</b-nav-item>
                        <b-nav-item to="/company/directions">오시는길</b-nav-item>
                    </b-nav>
                    <b-nav class="d-flex justify-content-end">
                        <b-nav-item to="/company/greeting">회사소개</b-nav-item>
                        <b-nav-item to="/business">사업분야</b-nav-item>
                        <b-nav-item to="/portfolio">포트폴리오</b-nav-item>
                        <b-nav-item to="/customer/notice">고객센터</b-nav-item>
                    </b-nav>
                </div>
            </b-col>
        </b-row>
        <!--</div>-->
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
