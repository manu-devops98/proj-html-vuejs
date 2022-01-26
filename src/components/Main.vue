<template>
  <main>
    <!-- sezione build your dream  -->
    <SectionBuild />
    <!-- SEZIONE CAREER PERSPECTIVE  -->
    <SectionCareerPerspective />
    <!-- SEZIONE NUMERI  -->
    <SectionNumbers />
    <!-- SEZIONE CORSI  -->
    <SectionCourses />
    <!-- SEZIONE DOWNLOAD  -->
    <SectionDownload />
    <!-- SEZIONE EVENTI  -->
    <SectionEvents />
    <!-- SEZIONE COMPONENTE SLIDER -->
    <SectionSlider />
  </main>
</template>

<script>
import SectionBuild from "./Main_components/SectionBuild.vue";
import SectionCareerPerspective from "./Main_components/SectionCareerPerspective.vue";
import SectionNumbers from "./Main_components/SectionNumbers.vue";
import SectionCourses from "./Main_components/SectionCourses.vue";
import SectionDownload from "./Main_components/SectionDownload.vue";
import SectionEvents from "./Main_components/SectionEvents.vue";
import SectionSlider from "./Main_components/SectionSlider.vue";
export default {
  name: "Main",
  components: {
    SectionBuild,
    SectionCareerPerspective,
    SectionNumbers,
    SectionCourses,
    SectionDownload,
    SectionEvents,
    SectionSlider,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
main {
  width: 100%;
  padding: 2em 0;
}
</style>
