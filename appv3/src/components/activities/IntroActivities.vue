<template>
  <div class="wrapper">
    <p>Choose a category</p>
    <v-img :src="require('@/assets/vectors/actvs.svg')"></v-img>
  </div>
</template>

<script>

export default {
  name: "IntroActivites"
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  padding: 0;
  color: #27253f;
  font-family: Pacifico;
  text-align: center;
  font-size: 5vh;
  z-index: 2;
  width: 100%;
}

img {
  width: 100%;
  margin: auto;
}

p {
  background-color: #f8f7f7;
}
</style>