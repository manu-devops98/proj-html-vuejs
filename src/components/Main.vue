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
    <section class="career-perspective p-3">
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
    <section class="numbers">
      <div class="container-70">
        <div class="row row-cols-4">
          <div class="col-3">
            <h1>1.926</h1>
            <h3 class="text-uppercase">Finished sessions</h3>
          </div>
          <div class="col-3">
            <h1>3.092+</h1>
            <h3 class="text-uppercase">Enrolled leaners</h3>
          </div>
          <div class="col-3">
            <h1>200</h1>
            <h3 class="text-uppercase">online instructors</h3>
          </div>
          <div class="col-3">
            <h1>100%</h1>
            <h3 class="text-uppercase">satisfaction rate</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- SEZIONE CORSI  -->
    <section class="courses">
      <div class="container-70">
        <h3 class="text-uppercase text-center">
          choose where you'd like to begin
        </h3>
        <h1 class="text-center mt-3">Latest Featured <span>Courses</span></h1>
        <div class="row">
          <div class="container-cards d-flex flex-wrap">
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/course-02-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3>$40.00</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Blanche Fields</p>
                  </div>
                  <p class="fw-bold fs-5">
                    Learning to Write as a Professional Author
                  </p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 20
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 50 Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/stock-full-hd-03-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3 class="px-2">Free</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/d0d504142acfde820eef2f11feea6253.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Maggie Strickland</p>
                  </div>
                  <p class="fw-bold fs-5">
                    Customer-centric Info-Tech Strategies
                  </p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 24
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 769
                      Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/stock-full-hd-04-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3>$19.00</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/d0d504142acfde820eef2f11feea6253.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Maggie Strickland</p>
                  </div>
                  <p class="fw-bold" id="third-title">
                    Open Programming Courses for Everyone: Phyton
                  </p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 17
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 62 Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/stock-full-hd-06-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3>$26.00</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Blanche Fields</p>
                  </div>
                  <p class="fw-bold fs-5">Academic Listening and Note-taking</p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 14
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 67 Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/course-featured-image-01-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3>$39.00</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Blanche Fields</p>
                  </div>
                  <p class="fw-bold fs-5">
                    Master jQuery in a Short Period of Time
                  </p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 6
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 51 Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="container-image w-100">
                  <img
                    class="w-100"
                    src="../assets/img/stock-full-hd-05-480x298.jpg"
                    alt=""
                  />
                  <div class="price">
                    <h3>$59.00</h3>
                  </div>
                </div>
                <div class="container-text">
                  <div class="profile-icon">
                    <div class="profile-image">
                      <img
                        src="../assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                        alt=""
                      />
                    </div>
                    <p>Blanche Fields</p>
                  </div>
                  <p class="fw-bold fs-5">
                    Introduction to Javascript for Beginners
                  </p>
                  <div class="lessons d-flex">
                    <p>
                      <span><font-awesome-icon icon="file-alt" /></span> 14
                      Lessons
                    </p>
                    <p>
                      <span><font-awesome-icon icon="user" /></span> 76 Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button d-flex justify-content-center">
          <button type="button" class="btn">
            View all courses
            <span class="mx-2"><font-awesome-icon icon="arrow-right" /></span>
          </button>
        </div>
      </div>
    </section>
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
  // SEZIONE CAREER PERSPECTIVE
  .career-perspective {
    margin-bottom: 5em;
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
        cursor: pointer;
        .box-text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: $whiteColor;
          color: black;
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
  // SEZIONE NUMERI
  .numbers {
    background-color: $galleryColor;
    padding: 3em 0;
    .container-70 {
      .col-3 {
        text-align: center;
        h1 {
          color: $junglegreenColor;
          font-weight: bold;
        }
        h3 {
          font-size: 0.8em;
          font-weight: bold;
        }
      }
    }
  }
  // SEZIONE CORSI
  .courses {
    padding: 5em;
    .container-70 {
      h3 {
        font-size: 0.8em;
        color: $oslograyColor;
      }
      h1 {
        color: $wineColor;
        font-weight: bold;
        span {
          font-weight: 300;
          color: $junglegreenColor;
        }
      }
      .container-cards {
        margin-top: 3em;
        .card {
          border: none;
          margin: 0 10px 10px 10px;
          cursor: pointer;
          &:hover {
            background-color: $whiteColor;
            box-shadow: 10px 10px 10px lightgrey;
          }
          .container-image {
            position: relative;
            .price {
              background-color: $junglegreenColor;
              display: inline-block;
              border-radius: 5px;
              text-align: center;
              position: absolute;
              top: 0;
              right: 0;
              padding: 0.5em;
              cursor: pointer;
              h3 {
                color: white;
                margin: 0;
              }
            }
          }
          .container-text {
            width: 90%;
            margin: 0 auto;
            padding: 1em 0;
            .profile-icon {
              display: flex;
              align-items: center;
              .profile-image {
                img {
                  border-radius: 50%;
                  width: 100%;
                }
              }
              p {
                margin-top: 1em;
                margin-left: 1em;
                color: $oslograyColor;
              }
              #third-title {
                font-size: 1.2em;
              }
            }
            .lessons {
              p {
                font-size: 0.6em;
                margin-right: 2.5em;
                color: $oslograyColor;
                span {
                  margin-right: 0.5em;
                }
              }
            }
          }
        }
      }
      .btn {
        background-color: $junglegreenColor;
        color: white;
        padding: 0.5em 2em;
        margin-top: 2em;
      }
    }
  }
}
</style>
