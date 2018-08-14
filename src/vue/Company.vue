<template>
    <div>
        <h3>회사 소개 About Company</h3>
        <b-nav tabs>
            <b-nav-item to="/company/greeting">인사말</b-nav-item>
            <b-nav-item to="/company/directions">오시는 길</b-nav-item>
        </b-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Company'
    }
</script>