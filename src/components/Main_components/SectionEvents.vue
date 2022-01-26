<template>
  <section class="events">
    <div class="container-70">
      <h3 class="text-uppercase text-center">get in contact now</h3>
      <h1 class="text-center">Upcoming <span>Events</span></h1>
      <div class="row">
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                Texas, US
              </p>
              <h3>Storytelling Workshop</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>22</h3>
              <p class="text-uppercase">nov</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                New York, US
              </p>
              <h3>Painting Art Contest 2020</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>10</h3>
              <p class="text-uppercase">oct</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                Hamburg, Germany
              </p>
              <h3>International Art Fair 2020</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>23</h3>
              <p class="text-uppercase">nov</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                Illinois, US
              </p>
              <h3>Street Performance: Call for Artist</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>15</h3>
              <p class="text-uppercase">dec</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                Illinois, US
              </p>
              <h3>Consumer Food Safety Education Conference</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>22</h3>
              <p class="text-uppercase">jul</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box w-100 d-flex justify-content-between">
            <div class="col-left w-75">
              <p>
                <span><font-awesome-icon icon="map-marker-alt" /></span>
                Dubai
              </p>
              <h3>How meditation improve your mental health?</h3>
            </div>
            <div class="col-right w-25 text-center">
              <h3>12</h3>
              <p class="text-uppercase">aug</p>
              <button type="button" class="btn">Get ticket</button>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center m-4 events-click">
        Excited about our event?
        <a>View all events <font-awesome-icon icon="arrow-right" /></a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionEvents",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.events {
  margin-top: 4em;
  h3 {
    font-size: 0.8em;
    color: $oslograyColor;
  }
  h1 {
    color: $wineColor;
    font-weight: bold;
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    span {
      color: $junglegreenColor;
      font-weight: 300;
    }
  }
  .events-click {
    color: $oslograyColor;
    a {
      color: $junglegreenColor;
      border-bottom: 1px solid lightgrey;
      cursor: pointer;
      &:hover {
        color: $wineColor;
      }
    }
  }
  .row {
    .card-box {
      border-left: 4px solid transparent;
      background-color: $galleryColor;
      padding: 1em;
      margin: 1em 1em;
      &:hover {
        background-color: white;
        box-shadow: 5px 5px 5px $oslograyColor;
        border-left: 4px solid $junglegreenColor;
      }
      .col-left {
        p {
          font-size: 0.8em;
          color: $oslograyColor;
          margin-bottom: 0.5em;
          font-weight: 300;
          span {
            margin-right: 0.5em;
          }
        }
        h3 {
          font-size: 1em;
          color: black;
          font-weight: bold;
        }
      }
      .col-right {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        h3 {
          font-size: 3em;
          color: $junglegreenColor;
          margin: 0;
          font-weight: 300;
        }
        p {
          margin: 0;
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 0.8em;
        }
        .btn {
          background-color: $junglegreenColor;
          color: white;
          padding: 0.2em 0.6em;
          &:hover {
            background-color: $wineColor;
          }
        }
      }
    }
  }
}
</style>
