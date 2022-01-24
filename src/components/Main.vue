<template>
  <main>
    <!-- sezione build your dream  -->
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
                src="../assets/img/home-5-image-box-01.png"
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
                src="../assets/img/home-5-image-box-02.png"
                alt=""
              />
            </div>
            <h3 class="fw-bold mt-4 mb-3">Web Development</h3>
            <p class="">
              Learn to start building a webpage from scratch. You decide your
              own pace, course and speed.
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
                src="../assets/img/home-5-image-box-03.png"
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
                src="../assets/img/home-5-image-box-04.png"
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
    <!-- SEZIONE CAREER PERSPECTIVE  -->
    <section class="career-perspective">
      <div class="container-70">
        <div class="row row-cols-2">
          <div class="col position-relative">
            <div class="image-background">
              <img src="../assets/img/underlay-shape-lilla.svg" alt="" />
            </div>
            <div class="container-img">
              <img src="../assets/img/about-us-03-image-01.png" alt="" />
            </div>
          </div>
          <div class="col">
            <div class="container-text">
              <h3 class="text-uppercase">dream with <span>maxcoach</span></h3>
              <h1>Construct A <span>Stunning</span> Career Perspective</h1>
            </div>
            <div class="container-box">
              <div class="box">
                <div :class="careerThree ? 'box-text active' : 'box-text'">
                  <p class="p-3">
                    Multiple Platforms Supported for Teaching & Studying
                  </p>
                  <span class="p-3" @click="careerThree = !careerThree"
                    ><font-awesome-icon
                      :icon="careerThree ? 'minus-circle' : 'plus-circle'"
                  /></span>
                </div>
                <div v-show="careerThree" class="box-hover">
                  <p class="p-3">
                    MaxCoach supports the act of teaching and learning on
                    multiple platforms like online or offline via material
                    downloads. We know things aren't supposed to be devoured in
                    a short time, you can always accessour knowledge base from
                    any device.
                  </p>
                </div>
              </div>
              <div class="box">
                <div :class="careerTwo ? 'box-text active' : 'box-text'">
                  <p class="p-3">
                    Multiple Course Partecipation at the Same Time
                  </p>
                  <span class="p-3" @click="careerTwo = !careerTwo"
                    ><font-awesome-icon
                      :icon="careerTwo ? 'minus-circle' : 'plus-circle'"
                  /></span>
                </div>
                <div v-show="careerTwo" class="box-hover">
                  <p class="p-3">
                    MaxCoach supports the act of teaching and learning on
                    multiple platforms like online or offline via material
                    downloads.
                  </p>
                </div>
              </div>
              <div class="box">
                <div :class="career ? 'box-text active' : 'box-text'">
                  <p class="p-3">
                    Track Study Progress & Deliver Prompt Feedback
                  </p>
                  <span class="p-3" @click="career = !career"
                    ><font-awesome-icon
                      :icon="career ? 'minus-circle' : 'plus-circle'"
                  /></span>
                </div>
                <div v-show="career" class="box-hover">
                  <p class="p-3">
                    MaxCoach supports the act of teaching and learning on
                    multiple platforms like online or offline via material
                    downloads. We know things aren't supposed to be devoured in
                    a short time, you can always accessour knowledge base from
                    any device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SEZIONE NUMERI  -->
    <!-- SEZIONE CORSI  -->
    <!-- SEZIONE OWN PACE  -->
    <!-- SEZIONE MOBILE  -->
    <!-- SEZIONE EVENTI  -->
    <!-- SEZIONE COMPONENTE SLIDER -->
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      career: false,
      careerTwo: false,
      careerThree: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
main {
  width: 100%;
  padding: 2em 0;
  // SEZIONE BUILD DREAM
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
  .career-perspective {
    .image-background {
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      z-index: -1;
      img {
        width: 60%;
      }
    }
    .container-img {
      margin-left: 6em;
      img {
        width: 90%;
      }
    }
    .container-text {
      margin-bottom: 3em;
      h3 {
        font-size: 0.7em;
        font-weight: 300;
        color: grey;
        span {
          font-weight: bold;
          color: $wineColor;
        }
      }
      h1 {
        color: $wineColor;
        font-weight: bold;
        span {
          color: $junglegreenColor;
          font-weight: 300;
        }
      }
    }
    .container-box {
      .box {
        display: flex;
        flex-direction: column;
        box-shadow: 40px 30px 30px 30px $galleryColor;
        margin-bottom: 2em;
        .box-text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: $whiteColor;
          color: $pewterColor;
          border: 2px solid $whiteColor;
          border-radius: 3px;
          &.active {
            background-color: $junglegreenColor;
            color: white;
          }
          p {
            font-weight: bold;
            margin: 0;
          }
        }
        .box-hover {
          margin: 0;
          height: 100%;
          background-color: $whiteColor;
          border: 1px solid lightgrey;
          border-top: none;
          border-radius: 0;
          p {
            font-size: 1em;
            color: $oslograyColor;
          }
        }
      }
    }
  }
}
</style>
