<template>
  <footer>
    <!-- FOOTER STATICO POI DINAMICO CON JS  -->
    <div class="container-70">
      <div class="row">
        <div class="col-6">
          <h3>Address</h3>
          <ul class="list-unstyled">
            <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
            <li>+1 (305) 547-9909 (9am -5pm EST, Monday - Friday)</li>
            <li>support@maxcoach.com</li>
            <li>
              <div class="icon d-flex">
                <font-awesome-icon class="brand" :icon="['fab', 'facebook']" />
                <font-awesome-icon class="brand" :icon="['fab', 'twitter']" />
                <font-awesome-icon class="brand" :icon="['fab', 'instagram']" />
                <font-awesome-icon class="brand" :icon="['fab', 'linkedin']" />
              </div>
            </li>
          </ul>
        </div>
        <div class="col-4">
          <h3>Explore</h3>
          <div class="container-list d-flex">
            <div class="col-left w-50">
              <ul class="list-unstyled">
                <li>Start theme</li>
                <li>Blog</li>
                <li>About us</li>
              </ul>
            </div>
            <div class="col-right w-50">
              <ul class="list-unstyled">
                <li>Success story</li>
                <li>Courses</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h3>Information</h3>
          <ul class="list-unstyled">
            <li>Membership</li>
            <li>Purchase guide</li>
            <li>Privacy policy</li>
            <li>Terms of services</li>
          </ul>
        </div>
      </div>
      <h3 class="text-center">2020 Maxcoach. All Rights Reserved</h3>
    </div>
    <button type="button" class="btn">
      <a href="navbar" class="mx-2"><font-awesome-icon icon="arrow-up" /></a>
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
footer {
  padding: 2em 0;
  position: relative;
  .container-70 {
    .row {
      .col-6 {
        h3 {
          font-size: 1em;
          color: black;
          font-weight: bold;
        }
        li {
          margin-bottom: 0.7em;
          font-size: 0.8em;
          color: $oslograyColor;
          .icon {
            margin-top: 1.5em;
            .brand {
              font-size: 1.5em;
              margin-right: 1em;
            }
          }
        }
      }
      .col-4,
      .col-2 {
        h3 {
          font-size: 1em;
          color: black;
          font-weight: bold;
        }
        li {
          margin-bottom: 0.7em;
          font-size: 0.8em;
          color: $oslograyColor;
        }
      }
    }
    h3 {
      color: $oslograyColor;
      font-size: 0.8em;
      margin-top: 3em;
    }
  }
  .btn {
    background-color: $junglegreenColor;
    border-radius: 80%;
    padding: 0.7em;
    position: absolute;
    bottom: 20px;
    right: 20px;
    a {
      font-size: 1.2em;
      color: white;
    }
  }
}
</style>
