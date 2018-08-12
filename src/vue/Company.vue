<template>
    <div>
        <h3>회사 소개 About Company</h3>
        <b-tabs>
            <b-tab title="인사말" :active="isGreetingPage" @click="selectGreeting">
                <Greeting></Greeting>
            </b-tab>
            <b-tab title="오시는 길" :active="!isGreetingPage" @click="selectDirections">
                <Directions :doLoad="!isGreetingPage"></Directions>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import Greeting from "./company/Greeting";
    import Directions from "./company/Directions";

    export default {
        name: 'Company',
        components: {Directions, Greeting},
        data() {
            return {
                isGreetingPage: true
            }
        },
        methods: {
            selectGreeting() {
                this.isGreetingPage = true;
            },
            selectDirections() {
                this.isGreetingPage = false;
            }
        }
    }
</script>