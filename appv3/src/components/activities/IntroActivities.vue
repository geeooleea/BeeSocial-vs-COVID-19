<template>
  <div class="wrapper">
    <p>Choose a category</p>
    <img src="@/assets/vectors/actvstroke.svg" class="img"/>
  </div>
</template>

<script>
import actvstroke from '@/assets/svg/actvstroke.vue';

export default {
  name: "IntroActivites",
  data() {
    return {
      actvstroke: actvstroke
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  padding: 0;
  color: #27253f;
  font-family: Pacifico;
  text-align: center;
  font-size: 40px;
  z-index: 2;
}

.img {
  width: 110%;
  position: relative;
  left: -5%;
  top: -3vh;
}

p {
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: #f8f7f7;
}
</style>