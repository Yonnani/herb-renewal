<template>
    <div>
        <h3>고객센터 CUSTOMER</h3>
        <b-tabs>
            <b-tab title="공지사항" active>
                <NoticeBoard></NoticeBoard>
            </b-tab>
            <b-tab title="견적문의">
                <EstimateRequest></EstimateRequest>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import NoticeBoard from "./customer/NoticeBoard";
    import EstimateRequest from "./customer/EstimateRequest";
    export default {
        name: 'Customer',
        components: {EstimateRequest, NoticeBoard}
    }
</script>