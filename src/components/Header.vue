<template>
  <header>
    <Navbar />
    <Jumbotron />
  </header>
</template>

<script>
import Jumbotron from "./Header_components/Jumbotron.vue";
import Navbar from "./Header_components/Navbar.vue";
export default {
  name: "Header",
  components: {
    Jumbotron,
    Navbar,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
header {
  background-color: $galleryColor;
  font-weight: 300;
}
</style>
