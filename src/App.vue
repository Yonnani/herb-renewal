<template>
  <div id="app" class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Container from "./vue/Home";
import Header from "./vue/Header";
import Footer from "./vue/Footer";

export default {
  name: 'app',
  components: {
      Footer,
      Header,
      Container
  }
}
</script>