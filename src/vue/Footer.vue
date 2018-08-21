<template>
    <footer class="pt-3 footer">
        <b-row>
            <b-col cols="12" md="3" class="px-5 px-md-0 mb-2">
                <img src="./../assets/logo.png" class="w-100" style="max-width: 270px;" />
            </b-col>
            <b-col cols="12" md="6" class="px-5 px-md-4 mb-2">
                <div class="d-flex mb-2">
                    <div class="mx-2">
                        <a href="#/company/greeting">인사말</a> /
                        <a href="#/company/directions">오시는길</a> /
                        <a href="#/customer/estimate" style="display: none;">견적기타문의</a><!-- / -->
                        이메일주소무단수집금지
                    </div>
                </div>
                <div class="d-flex flex-column font-weight-light small-text">
                    <div class="mx-2 d-flex flex-column flex-md-row">
                        <dt class="mb-0">사업자등록번호&nbsp;</dt><dd class="mb-0">617-89-18001&nbsp;&nbsp;</dd>
                        <dt class="mb-0">대표&nbsp;</dt><dd class="mb-0">장기웅</dd>
                    </div>
                    <div class="mx-2 d-flex flex-column flex-md-row">
                        <dt class="mb-0">본사&nbsp;</dt><dd class="mb-0">부산광역시 중앙대로 2093, 803호</dd>
                    </div>
                    <div class="mx-2 d-flex flex-column flex-md-row">
                        <dt class="mb-0">E-mail&nbsp;</dt><dd class="mb-0">herb54321@naver.com&nbsp;&nbsp;</dd>
                        <dt class="mb-0">FAX&nbsp;</dt><dd class="mb-0">051)517-1755</dd>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" md="3" class="px-5 px-md-4">
                <div class="d-flex flex-column mx-2">
                    <dt>전화문의</dt>
                    <dd>051)902-1755</dd>
                </div>
            </b-col>
        </b-row>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .small-text {
        font-size: 14px;
    }
</style>