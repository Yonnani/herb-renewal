<template>
  <div id="app" class="container">
    <Header></Header>
    <main><router-view></router-view></main>
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