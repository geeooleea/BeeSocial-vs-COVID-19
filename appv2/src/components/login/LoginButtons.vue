<template>
  <v-container class="container" :style="{ backgroundImage: `url(${backgroundUrl})`}">
    <div v-ripple class="ripple middle">
      <div class="img-wrapper">
        <v-img :src="require('@/assets/buttons/g-logo.png')" class="g-logo"></v-img>
      </div>
      <div class="logo-desc" @click="signIn()">Sign in with Google</div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import backgroundUrl from "@/assets/vectors/loginv2.svg";
export default {
  name: "LoginButtons",
  data() {
    return {
      backgroundUrl: backgroundUrl,
      center: "center",
      signInUrl: '/auth/google'
    };
  },
  methods: {
    signIn() {
      axios.get(`http://localhost:3000${this.signInUrl}`)
        .then(function (response) {
        console.log(response);
      });
    }
  }
};
</script>

<style scoped>
.container {
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 30vh;
  padding-top: 5vh;
}

.logo-desc {
  font-family: RobotoMedium;
  padding-left: 10px;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.54);
}

.ripple {
  background-color: #fff;
  padding: 8px;
  padding-bottom: 15px;
  padding-top: 15px;
  width: 95%;
  box-shadow: 0px 4px 10px rgba(39, 37, 63, 0.3);
  border-radius: 15px;
  margin: auto;
}

.middle > * {
  vertical-align: middle;
  display: inline-block;
}

.g-logo {
    width: 60%;
    margin: auto;
}
.img-wrapper {
    width: 20%;
}
</style>