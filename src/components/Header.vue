<template>
  <header>
    <!-- navbar inizialmente statica poi con js -->
    <div class="navbar">
      <!-- logo  -->
      <div class="container-70 d-flex justify-content-start align-items-center">
        <div class="container-logo">
          <img class="w-100" src="../assets/img/dark-logo.png" alt="" />
        </div>
        <div
          class="container-link d-flex justify-content-end align-items-center"
        >
          <ul class="list-unstyled d-flex">
            <li>
              <a href=""
                >Home <span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li>
              <a href=""
                >Pages<span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li>
              <a href=""
                >Courses<span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li>
              <a href=""
                >Features<span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li>
              <a href=""
                >Blog<span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li class="mx-1">
              <a href=""
                >Shop<span><font-awesome-icon icon="chevron-down" /></span
              ></a>
            </li>
            <li class="position-relative mx-4">
              <a href=""
                ><font-awesome-icon icon="shopping-cart" />
                <span class="number-cart">0</span></a
              >
            </li>
            <li>
              <a href=""><font-awesome-icon icon="user-circle" /></a>
            </li>
          </ul>
        </div>
        <div class="search-bar d-flex align-items-center">
          <input
            type="text"
            class="form-control text-muted px-3"
            id="searchInput"
            placeholder="Search..."
          />
          <!-- <div class="icon">
            <font-awesome-icon icon="search" />
          </div> -->
        </div>
      </div>
    </div>
    <!-- aggiunta componente jumbotron  -->
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
header {
  background-color: $galleryColor;
  font-family: "Outfit", sans-serif !important;
  font-weight: 300;
  .container-logo {
    width: 15%;
    // background-color: red;
  }
  .container-link {
    width: 70%;
    li {
      margin-right: 2em;
      margin-top: 1em;
      padding: 0.3em 0;
      a {
        color: $wineColor;
        text-decoration: none;
        font-size: 0.9em;
        .fa-chevron-down {
          font-size: 0.5em;
          margin-left: 0.5em;
          vertical-align: middle;
        }
        .number-cart {
          position: absolute;
          bottom: 20px;
          left: 15px;
          z-index: 3;
          padding: 2px;
          display: block;
          border-radius: 40%;
          background-color: turquoise;
          font-size: 0.6em;
          color: white;
        }
      }
    }
  }
  .search-bar {
    input {
      width: 100%;
      border: none;
      padding: 0.8em 0.9em;
    }
  }
}
</style>
