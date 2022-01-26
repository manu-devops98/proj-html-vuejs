<template>
  <section class="download mt-5">
    <div class="container-70">
      <div class="row row-cols-2">
        <div class="col-4">
          <h3 class="text-uppercase">why esitate to register?</h3>
          <h1>Learn At Your Own <span>Pace</span></h1>
          <ul class="list-unstyled">
            <li>
              <div class="container-list d-flex">
                <font-awesome-icon icon="check" />
                <p class="mx-3">
                  Select & customize courses to your preferences
                </p>
              </div>
            </li>
            <li>
              <div class="container-list d-flex">
                <font-awesome-icon icon="check" />
                <p class="mx-3">Change the tutor and make arrangements</p>
              </div>
            </li>
            <li>
              <div class="container-list d-flex">
                <font-awesome-icon icon="check" />
                <p class="mx-3">Partecipate in events to join others</p>
              </div>
            </li>
            <li>
              <div class="container-list d-flex">
                <font-awesome-icon icon="check" />
                <p class="mx-3">
                  Get the desired certificate delivered at house
                </p>
              </div>
            </li>
          </ul>
          <button type="button" class="btn">Get started for free</button>
        </div>
        <div class="col-8">
          <div class="container-background-image">
            <img
              class="bg-grey"
              src="../../assets/img/underlay-shape-grey.svg"
              alt=""
            />
            <img
              class="shape"
              src="../../assets/img/maxcoach-shape-05-150x150.png"
              alt=""
            />
          </div>
          <div class="container-img">
            <img
              class=""
              src="../../assets/img/home-5-image-01-269x300.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-7">
          <div class="background-image">
            <img
              class="shape-line"
              src="../../assets/img/maxcoach-shape-01.png"
              alt=""
            />
            <img
              class="bg-grey"
              src="../../assets/img/underlay-shape-grey.svg"
              alt=""
            />
            <img
              class="shape-square"
              src="../../assets/img/maxcoach-shape-07-150x150.png"
              alt=""
            />
          </div>
          <div class="container-image">
            <img
              class="w-50"
              src="../../assets/img/home-5-image-02-222x300.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-5">
          <h3 class="text-uppercase">what are you looking for?</h3>
          <h1>Learn on your <span>mobile</span> anytime!</h1>
          <p>
            Save lessons for later and revise or write notes at any time and on
            multiple devices on your way. Never interfere with activities of
            enjoyment or other precious moments.
          </p>
          <button type="button" class="btn">Download Our App</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionDownload",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.download {
  padding: 5em 0;
  .container-70 {
    .col-4,
    .col-5 {
      h3 {
        font-size: 0.8em;
        color: $oslograyColor;
      }
      h1 {
        color: $wineColor;
        font-weight: bold;
        margin-top: 0.5em;
        margin-bottom: 0.7em;
        span {
          color: $junglegreenColor;
          font-weight: 300;
        }
      }
      li {
        .container-list {
          .fa-check {
            color: $junglegreenColor;
          }
          p {
            font-size: 0.8em;
            color: $oslograyColor;
          }
        }
      }
      .btn {
        background-color: $junglegreenColor;
        color: white;
        font-size: 0.8em;
        font-weight: bold;
        padding: 1em 3em;
        transition: 0.5s ease;
        &:hover {
          background-color: $wineColor;
        }
      }
    }
    .col-8 {
      position: relative;
      padding-left: 6em;
      .container-background-image {
        margin-top: 5.5em;
        // margin-left: 3em;
        position: absolute;
        top: 0;
        left: 5em;
        z-index: -1;
        // display: flex;
        width: 100%;
        .bg-grey {
          width: 55%;
          margin-right: 1em;
        }
        .shape {
          width: 25%;
        }
      }
      .container-img {
        position: relative;
        z-index: 2;
        padding-bottom: 2em;
        img {
          margin-left: 5em;
          width: 60%;
        }
      }
    }
    .col-5 {
      margin-top: 10em;
      h1 {
        margin-bottom: 0.3em;
      }
      p {
        font-size: 0.8em;
        color: $oslograyColor;
        margin-bottom: 3em;
      }
    }
    .col-7 {
      margin-top: 10em;
      position: relative;
      .background-image {
        position: absolute;
        top: 0;
        right: 40px;
        z-index: -1;
        width: 100%;
        .bg-grey {
          width: 60%;
          margin-top: 5em;
        }
        .shape-square {
          position: absolute;
          bottom: 50px;
          right: 10px;
          z-index: -1;
        }
      }
      .container-image {
        width: 100%;
        height: 100%;
        img {
          position: relative;
          top: 2em;
          left: 12em;
        }
      }
    }
  }
}
</style>
