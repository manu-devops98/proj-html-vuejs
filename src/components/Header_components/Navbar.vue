<template>
  <div class="navbar" id="navbar">
    <!-- logo  -->
    <div class="container-70 d-flex justify-content-start align-items-center">
      <div class="container-logo">
        <img class="w-100" src="../../assets/img/dark-logo.png" alt="" />
      </div>
      <div class="container-link d-flex justify-content-end align-items-center">
        <ul class="list-unstyled d-flex">
          <li v-for="(item, index) in navItems" :key="index">
            <a :href="item.url"
              >{{ item.name }}
              <span><font-awesome-icon icon="chevron-down" /></span
            ></a>
          </li>
        </ul>
      </div>
      <!-- icons and search bar  -->
      <div class="icon d-flex justify-content-between">
        <div class="col-left d-flex align-items-center">
          <ul class="list-unstyled d-flex">
            <li class="position-relative icon">
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
        <div class="col-right d-flex align-items-center">
          <div class="search-bar">
            <input
              type="text"
              class="form-control text-muted px-3"
              id="searchInput"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navItems: [
        {
          name: "Home",
          url: "#",
        },
        {
          name: "Pages",
          url: "#",
        },
        {
          name: "Courses",
          url: "#",
        },
        {
          name: "Features",
          url: "#",
        },
        {
          name: "Blog",
          url: "#",
        },
        {
          name: "Shop",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.container-logo {
  width: 15%;
}
.container-link {
  width: 60%;
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
    }
  }
}
.icon {
  width: 25%;
  .col-left {
    width: 25%;
    li {
      margin-right: 1.5em;
      margin-top: 1em;
      padding: 0.3em 0;
      a {
        color: $wineColor;
        text-decoration: none;
        font-size: 0.9em;
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
  .col-right {
    width: 75%;
    .search-bar {
      input {
        width: 100%;
        border: none;
        padding: 0.8em 0.9em;
        margin-left: 0.5em;
      }
    }
  }
}
</style>
