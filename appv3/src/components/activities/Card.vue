<template>
  <div class="container" :style="{ backgroundImage: `url(${backgroundUrl})`}"></div>
</template>

<script>

export default {
  name: "Card",
  data() {
    return {
    };
  },
  props: {
    title: String,
    img: String,
    id: Number
  },
  computed: {
    backgroundUrl: function() {
      return `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/${this.img}`;
    }
  }
};
</script>

<style scoped>
.container {
    position: relative;
    width: 95%;
    height: 19vh;
    margin: auto;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 10px rgba(39, 37, 63, 0.3), inset 0px 0px 160px #27253f;
    border-radius: 15px;
    margin-top: 3vh;
}
</style>