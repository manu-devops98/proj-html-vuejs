<template>
  <section class="slider">
    <div class="container-70">
      <h3 class="text-center">people are praising maxcoach</h3>
      <h1 class="text-center">What make they <span>love us?</span></h1>
      <div class="row">
        <div class="col-4">
          <div class="card-box">
            <img src="../../assets/img/testimonial-avata-02.jpg" alt="" />
            <p class="text-center review">
              I am free to learn at my own pace, follow my own schedule and
              choose the subject I like. Great study portal for people like me.
            </p>
            <h3 class="text-uppercase text-center">mina hollace</h3>
            <p class="text-center job">/ Freelancer</p>
          </div>
        </div>
        <div class="col-4">
          <div class="card-box">
            <img src="../../assets/img/testimonial-avata-04.jpg" alt="" />
            <p class="text-center review">
              MaxCoach is my best choice. Their tutors are smart and
              professional when dealing with students.
            </p>
            <h3 class="text-uppercase text-center">madley pondor</h3>
            <p class="text-center job">/ IT Specialist</p>
          </div>
        </div>
        <div class="col-4">
          <div class="card-box">
            <img src="../../assets/img/testimonial-avata-01.jpg" alt="" />
            <p class="text-center review">
              I am happy with their arrangement of lessons and subjects. They
              reflect a scientific investigation.
            </p>
            <h3 class="text-uppercase text-center">luvic dubble</h3>
            <p class="text-center job">/ Private Tutor</p>
          </div>
        </div>
      </div>
      <div class="nav d-flex justify-content-center align-items-center">
        <font-awesome-icon class="active" icon="circle" />
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="circle" />
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="text-center">
            Start today for getting <span>Online Certification</span>
          </h3>
          <h1 class="text-center">
            You can be your own guiding star with our help!
          </h1>
          <button type="button" class="btn">Get started now</button>
          <img
            class="shape-lines"
            src="../../assets/img/maxcoach-shape-01.png"
            alt=""
          />
          <img
            class="shape-round"
            src="../../assets/img/maxcoach-shape-02.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionSlider",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";
.slider {
  margin-top: 4em;
  padding: 5em 0;
  background-color: $galleryColor;
  h3 {
    font-size: 0.8em;
    color: $oslograyColor;
    text-transform: uppercase;
  }
  h1 {
    color: $wineColor;
    font-weight: bold;
    margin-bottom: 2em;
    span {
      color: $junglegreenColor;
      font-weight: 300;
    }
  }
  .row {
    .card-box {
      background-color: white;
      padding: 1.5em;
      position: relative;
      box-shadow: 5px 5px 20px 2px $oslograyColor;
      border-radius: 5px;
      height: 280px;
      &:hover {
        box-shadow: 10px 10px 20px 2px $oslograyColor;
      }
      img {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 40%;
      }
      .review {
        font-size: 1em;
        margin-top: 4em;
        margin-bottom: 2em;
        font-weight: 300;
      }
      h3 {
        color: black;
        font-weight: bold;
      }
      .job {
        color: $oslograyColor;
        font-size: 0.8em;
      }
    }
  }
  .nav {
    margin: 3em 0 5em 0;
    .fa-circle {
      margin-right: 2em;
      font-size: 0.4em;
      color: $oslograyColor;
      &.active {
        color: black;
        font-size: 0.6em;
        margin-right: 1.3em;
      }
    }
  }
  .row {
    .col-12 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      h3 {
        font-size: 1.2em;
        color: black;
        text-transform: none;
        font-weight: bold;
        span {
          font-weight: 300;
          color: $junglegreenColor;
        }
      }
      h1 {
        font-size: 1.7em;
        font-weight: bold;
        margin-bottom: 1em;
      }
      .btn {
        background-color: $junglegreenColor;
        color: white;
        margin: 0 auto;
        padding: 1em 4em;
        font-size: 0.8em;
        font-weight: bold;
        &:hover {
          background-color: $wineColor;
        }
      }
      .shape-lines {
        position: absolute;
        bottom: 50px;
        left: 60px;
        width: 10%;
      }
      .shape-round {
        position: absolute;
        bottom: -30px;
        right: 20px;
      }
    }
  }
}
</style>
