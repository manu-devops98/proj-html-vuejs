<template>
  <footer>
    <!-- FOOTER STATICO POI DINAMICO CON JS  -->
    <div class="container-70">
      <div class="row">
        <div class="col-6">
          <h3>Address</h3>
          <ul class="list-unstyled">
            <li v-for="(item, index) in addressItem" :key="index">
              <a :href="item.url">{{ item.name }}</a>
            </li>
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
                <li v-for="(item, index) in exploreItemLeft" :key="index">
                  <a :href="item.url">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="col-right w-50">
              <ul class="list-unstyled">
                <li v-for="(item, index) in exploreItemRight" :key="index">
                  <a :href="item.url">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h3>Information</h3>
          <ul class="list-unstyled">
            <li v-for="(item, index) in informationItem" :key="index">
              <a :href="item.url">{{ item.name }}</a>
            </li>
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
  data() {
    return {
      addressItem: [
        {
          name: "382 NE 191st St # 87394 Miami, FL 33179-3899",
          url: "#",
        },
        {
          name: "+1 (305) 547-9909 (9am -5pm EST, Monday - Friday)",
          url: "#",
        },
        {
          name: "support@maxcoach.com",
          url: "#",
        },
      ],
      exploreItemLeft: [
        {
          name: "Start here",
          url: "#",
        },
        {
          name: "Blog",
          url: "#",
        },
        {
          name: "About us",
          url: "#",
        },
      ],
      exploreItemRight: [
        {
          name: "Success story",
          url: "#",
        },
        {
          name: "Courses",
          url: "#",
        },
        {
          name: "Contact us",
          url: "#",
        },
      ],
      informationItem: [
        {
          name: "Membership",
          url: "#",
        },
        {
          name: "Purchase guide",
          url: "#",
        },
        {
          name: "Privacy policy",
          url: "#",
        },
        {
          name: "Terms of services",
          url: "#",
        },
      ],
    };
  },
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
          a {
            margin-bottom: 0.7em;
            font-size: 0.8em;
            color: $oslograyColor;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
          .icon {
            margin-top: 1.5em;
            .brand {
              font-size: 1.5em;
              color: $oslograyColor;
              margin-right: 1em;
            }
          }
        }
      }
      .col-4,
      .col-2 {
        .container-list {
          max-height: 88px;
          li {
            width: 160px;
          }
        }
        h3 {
          font-size: 1em;
          color: black;
          font-weight: bold;
        }
        li {
          a {
            margin-bottom: 0.7em;
            font-size: 0.8em;
            color: $oslograyColor;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
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
    &:hover {
      background-color: $wineColor;
    }
    a {
      font-size: 1.2em;
      color: white;
    }
  }
}
</style>
