<template>
  <section class="build-dream pt-5">
    <div class="container-70">
      <h3 class="text-uppercase text-center text-muted">
        start learning coding languages
      </h3>
      <h1 class="text-center mt-4">
        Build Your Dream <span class="text-uppercase">Today</span>
      </h1>
      <div class="row row-cols-4">
        <div class="col text-center">
          <div class="container-img w-100">
            <img
              class=""
              src="../../assets/img/home-5-image-box-01.png"
              alt=""
            />
          </div>
          <h3 class="fw-bold mt-4 mb-3">Idea Discussion</h3>
          <p class="">
            Get teamed upwith the specialists who works and tech coding for
            years at famous universities.
          </p>
          <button type="button" class="btn">
            Start now
            <span class="mx-2"><font-awesome-icon icon="arrow-right" /></span>
          </button>
        </div>
        <div class="col text-center">
          <div class="container-img w-100">
            <img
              class="web-dev-img"
              src="../../assets/img/home-5-image-box-02.png"
              alt=""
            />
          </div>
          <h3 class="fw-bold mt-4 mb-3">Web Development</h3>
          <p class="">
            Learn to start building a webpage from scratch. You decide your own
            pace, course and speed.
          </p>
          <button type="button" class="btn">
            Start now
            <span class="mx-2"><font-awesome-icon icon="arrow-right" /></span>
          </button>
        </div>
        <div class="col text-center">
          <div class="container-img w-100">
            <img
              class="system-administration-img"
              src="../../assets/img/home-5-image-box-03.png"
              alt=""
            />
          </div>
          <h3 class="fw-bold mt-4 mb-3">System Administration</h3>
          <p class="">
            Learners are encouraged to study the mechanism and structure of
            system administration.
          </p>
          <button type="button" class="btn">
            Start now
            <span class="mx-2"><font-awesome-icon icon="arrow-right" /></span>
          </button>
        </div>
        <div class="col text-center">
          <div class="container-img w-100">
            <img
              class=""
              src="../../assets/img/home-5-image-box-04.png"
              alt=""
            />
          </div>
          <h3 class="fw-bold mt-4 mb-3">Graphic Design</h3>
          <p class="">
            Have a passion for graphics and art? SHow your talents with
            confidence and self-assertiveness.
          </p>
          <button type="button" class="btn">
            Start now
            <span class="mx-2"><font-awesome-icon icon="arrow-right" /></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionBuild",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.build-dream {
  margin-bottom: 6em;
  h3 {
    font-size: 0.8em;
  }
  h1 {
    font-weight: bold;
    color: $wineColor;
    span {
      color: $junglegreenColor;
      font-weight: 300;
    }
  }
  .row {
    .col {
      margin-top: 3em;
      img {
        width: 50%;
      }
      .system-administration-img {
        width: 45% !important;
      }
      .web-dev-img {
        width: 35%;
      }
      h3 {
        font-size: 1.2em;
      }
      p {
        font-size: 0.9em;
        font-weight: 300;
        color: $oslograyColor;
      }
      .btn {
        color: $wineColor;
        background-color: transparent;
        padding: 0.5em 4em;
        span {
          font-size: 0.8em;
        }
        &:hover {
          background-color: $galleryColor;
          color: $junglegreenColor;
        }
      }
    }
  }
}
</style>
