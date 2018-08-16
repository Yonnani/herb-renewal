<template>
    <footer class="pt-3">
        <b-row>
            <b-col cols="12" md="3" class="px-4">
                <img src="./../assets/logo.png" />
            </b-col>
            <b-col cols="12" md="6" class="px-4">
                <div class="d-flex mb-2">
                    <div class="mx-2">
                        <a href="#/company/greeting">인사말</a> /
                        <a href="#/company/directions">오시는길</a> /
                        <a href="#/customer/estimate">견적기타문의</a> /
                        이메일주소무단수집금지
                    </div>
                </div>
                <!--<div class="d-flex font-weight-light small-text">-->
                    <!--<div class="mx-2">-->
                        <!--<dt>주식회사 허브동산</dt>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="d-flex flex-row font-weight-light small-text">-->
                    <!--<div class="mx-2">-->
                        <!--<dt>사업자등록번호</dt><dd class="mb-0">617-89-18001 대표 장기웅</dd>-->
                        <!--<dt>E-mail</dt><dd class="mb-0">herb54321@naver.com</dd>-->
                    <!--</div>-->
                    <!--<div class="mx-2">-->
                        <!--<dt>본사</dt><dd class="mb-0">부산광역시 중앙대로 2093, 803호</dd>-->
                        <!--<dt>FAX</dt><dd class="mb-0">051)517-1755</dd>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="d-flex flex-column font-weight-light small-text">
                    <div class="mx-2 d-flex flex-row">
                        <dt> 사업자등록번호 </dt>&nbsp;<dd class="mb-0"> 617-89-18001 </dd>&nbsp;&nbsp;
                        <dt>대표</dt>&nbsp;<dd class="mb-0">장기웅 </dd>
                    </div>
                    <div class="mx-2 d-flex flex-row">
                        <dt> 본사 </dt>&nbsp;<dd class="mb-0"> 부산광역시 중앙대로 2093, 803호 </dd>
                    </div>
                    <div class="mx-2 d-flex flex-row">
                        <dt> E-mail </dt>&nbsp;<dd class="mb-0"> herb54321@naver.com </dd>&nbsp;&nbsp;
                        <dt> FAX </dt>&nbsp;<dd class="mb-0"> 051)517-1755 </dd>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" md="3" class="px-4">
                    <dt>전화문의</dt>
                    <dd>051)902-1755</dd>
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