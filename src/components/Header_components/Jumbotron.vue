<template>
  <div class="jumbotron py-5">
    <div class="container-img">
      <img src="../../assets/img/jumbo-overlay.svg" alt="" />
    </div>
    <div class="container-70 d-flex">
      <div class="row row-cols-2">
        <div class="col-4 py-5">
          <h1 class="mb-4 fw-bold">
            Complete Your Dreams in JavaS Programming
          </h1>
          <p class="mb-4">
            Learn any coding program in distance and for a reasonable fee. You
            don't have to struggle alone, you've got our assistance and help.
          </p>
          <button type="button" class="btn">
            <span class="mx-2"><font-awesome-icon icon="download" /></span>
            Download free for E-book
          </button>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <div class="img">
            <img
              class="w-75"
              src="../../assets/img/home-5-hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="navbar-right d-flex flex-column justify-content-center align-items-center"
    >
      <img class="icon" src="../../assets/img/school_triangle.png" alt="" />

      <img class="icon" src="../../assets/img/life_buoy.png" alt="" />

      <img class="icon" src="../../assets/img/book_closed.png" alt="" />

      <img class="icon" src="../../assets/img/cart_icon.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.jumbotron {
  background-color: $galleryColor;
  color: $wineColor;
  width: 100%;
  position: relative;
  .navbar-right {
    background-color: white;
    position: fixed;
    top: 20%;
    right: 0;
    transform: translateY(-20%);
    width: 30px;
    padding: 0.5em;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px $oslograyColor;
    .icon {
      margin: 0.7em 0;
      width: 100%;
      cursor: pointer;
    }
  }
  .container-img {
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      transform: rotateX(180deg);
    }
  }
  .container-70 {
    position: relative;
    z-index: 3;
    p {
      color: $oslograyColor;
      font-weight: 300;
    }
    .btn {
      background-color: $junglegreenColor;
      color: white;
      font-size: 0.7em;
      font-weight: bold;
      padding: 0.7em 3em;
      cursor: pointer;
      transition: 0.5s ease;
      &:hover {
        background-color: $wineColor;
      }
    }
    .col-8 {
      .img {
        margin-bottom: 0.5em;
        width: 100%;
        img {
          margin-left: 10em;
        }
      }
    }
  }
}
</style>
