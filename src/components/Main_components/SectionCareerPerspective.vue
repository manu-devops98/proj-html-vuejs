<template>
  <section class="career-perspective p-3">
    <div class="container-70">
      <div class="row row-cols-2">
        <div class="col position-relative">
          <div class="image-background">
            <img src="../../assets/img/underlay-shape-lilla.svg" alt="" />
          </div>
          <div class="container-img">
            <img src="../../assets/img/about-us-03-image-01.png" alt="" />
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
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren't supposed to be devoured in a short time,
                  you can always accessour knowledge base from any device.
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
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads.
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
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren't supposed to be devoured in a short time,
                  you can always accessour knowledge base from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionCareerPerspective",
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
@import "../../assets/scss/style.scss";
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
</style>
