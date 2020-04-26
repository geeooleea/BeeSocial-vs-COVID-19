<template>
  <div class="container" :style="{ backgroundImage: `url(${backgroundUrl})`}"></div>
</template>

<script>
import backgroundUrl from "@/assets/vectors/loginv2.svg";

export default {
  name: "Card",
  data() {
    return {
      backgroundUrl: backgroundUrl,
      center: "center"
    };
  }
};
</script>

<style scoped>
.container {
    position: relative;
    width: 95%;
    height: 18vh;
    margin: auto;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 10px rgba(39, 37, 63, 0.3), inset 0px 0px 160px #27253f;
    border-radius: 15px;
    margin-top: 5vh;
}
</style>