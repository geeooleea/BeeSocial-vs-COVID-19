<template>
  <v-content>
    <div class="circle"></div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="content">
      <intro-activities class="list"></intro-activities>
      <activity-list class="list"></activity-list>
    </div>
  </v-content>
</template>

<script>
import ActivityList from "./ActivityList";
import IntroActivities from "./IntroActivities";

export default {
  name: "activities",
  components: {
    ActivityList,
    IntroActivities
  },
  mounted() {
  }
};
</script>

<style scoped>
.circle {
  width: 150vw;
  height: 150vw;
  text-align: center;
  line-height: 0;
  padding: 25% 0;
  border-radius: 100%;
  background: #4285f4;
  position: fixed;
  z-index: 4;
  top: -60vw;
  left: -25vw;
}

.circle1 {
  width: 150vw;
  height: 150vw;
  text-align: center;
  line-height: 0;
  padding: 25% 0;
  border-radius: 100%;
  background: #34a853;
  position: fixed;
  z-index: 3;
  top: -10vw;
  left: -25vw;
}

.circle2 {
  width: 150vw;
  height: 150vw;
  text-align: center;
  line-height: 0;
  padding: 25% 0;
  border-radius: 100%;
  background: #fbbc05;
  position: fixed;
  z-index: 2;
  top: 40vw;
  left: -25vw;
}

.circle3 {
  width: 150vw;
  height: 150vw;
  text-align: center;
  line-height: 0;
  padding: 25% 0;
  border-radius: 100%;
  background: #ea4335;
  position: fixed;
  z-index: 1;
  top: 90vw;
  left: -25vw;
}

.content {
  padding-top: 35vw;
}

.list {
  position: relative;
  z-index: 5;
}
</style>