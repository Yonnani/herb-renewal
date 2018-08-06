<template>
    <div>
        <b-nav class="d-flex justify-content-end">
            <b-nav-item to="/">홈으로</b-nav-item>
            <b-nav-item>견적문의</b-nav-item>
            <b-nav-item>오시는길</b-nav-item>
        </b-nav>
        <div class="d-flex justify-content-between">
            <span>LOGO</span>
            <b-nav class="d-flex justify-content-end">
                <b-nav-item to="/company">회사소개</b-nav-item>
                <b-nav-item to="/business">사업분야</b-nav-item>
                <b-nav-item to="/portfolio">포트폴리오</b-nav-item>
                <b-nav-item to="/customer">고객센터</b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
