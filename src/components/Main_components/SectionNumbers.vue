<template>
  <section class="numbers">
    <div class="container-70">
      <div class="row row-cols-4">
        <div class="col-3">
          <h1>1.926</h1>
          <h3 class="text-uppercase">Finished sessions</h3>
        </div>
        <div class="col-3">
          <h1>3.092+</h1>
          <h3 class="text-uppercase">Enrolled leaners</h3>
        </div>
        <div class="col-3">
          <h1>200</h1>
          <h3 class="text-uppercase">online instructors</h3>
        </div>
        <div class="col-3">
          <h1>100%</h1>
          <h3 class="text-uppercase">satisfaction rate</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionNumbers",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.numbers {
  background-color: $galleryColor;
  padding: 3em 0;
  .container-70 {
    .col-3 {
      text-align: center;
      h1 {
        color: $junglegreenColor;
        font-weight: bold;
      }
      h3 {
        font-size: 0.8em;
        font-weight: bold;
      }
    }
  }
}
</style>
