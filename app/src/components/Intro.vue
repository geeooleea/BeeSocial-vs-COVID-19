<template>
  <v-container class="background">
  </v-container>
</template>

<script>
//import axios from 'axios';

export default {
  name: "Intro",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    start() {
      /*
          axios.post('http://localhost:3000/user', {name: this.name})
          .then((res) => {
              data.setUser(res);
              this.$router.push('2');
          })*/
    }
  }
};
</script>

<style scoped>
.background {
  background-image: require('~@/assets/ezgif.com-video-cutter.mp4');
  background: linear-gradient(0deg, rgba(248, 247, 247, 0.37), rgba(248, 247, 247, 0.37));
}
</style>