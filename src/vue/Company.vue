<template>
    <div>
        <h3>회사 소개 About Company</h3>
        <b-tabs>
            <b-tab title="인사말" active>
                <Greeting></Greeting>
            </b-tab>
            <b-tab title="오시는 길" >
                <Directions></Directions>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import Greeting from "./company/Greeting";
    import Directions from "./company/Directions";

    export default {
        name: 'Company',
        components: {Directions, Greeting}
    }
</script>