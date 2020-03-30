<template>
  <v-content class="co">
    <div class="circle"></div>
    <v-container justify-center column fill-height align-center xs10>
      <p
        class="headline font-weight-bold text-center"
        style="margin-bottom: 5vh; position: relative; z-index: 2;"
        color="secondary"
      >Sooo... What's your name?</p>
      <v-text-field label="Solo" placeholder="Placeholder" solo v-model="name"></v-text-field>
      <v-btn block color="secondary" dark large v-on:click="start">Start Beeing!</v-btn>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios';
import data from '../data.js'

export default {
  name: "Intro",
  data() {
    return {
        name: ""
    };
  },
  methods: {
      start() {
          axios.post('http://localhost:3000/user', {name: this.name})
          .then((res) => {
              data.setUser(res);
              this.$router.push('2');
          })
      }
  }
};
</script>

<style scoped>
.co {
  margin-top: 30vh;
}
.circle {
  width: 150vw;
  height: 150vw;
  text-align: center;
  line-height: 0;
  padding: 25% 0;
  border-radius: 100%;
  background: #4285f4;
  position: fixed;
  z-index: 0;
  top: 15vh;
  left: -24vw;
}
</style>