<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <video playsinline autoplay muted loop class="bg-video">
      <source :src="require('@/assets/loginvideo.mp4')" type="video/mp4" />
    </video>
    <!-- <div class="filter"></div> -->
    <div class="c-login">
      <Logo class="logo"></Logo>
      <LoginDesc></LoginDesc>
      <LoginButtons></LoginButtons>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import LoginButtons from "@/components/LoginButtons.vue";
import Logo from "@/components/Logo.vue";
import LoginDesc from "@/components/LoginDesc.vue";

export default {
  name: "Home",
  components: {
    LoginButtons,
    Logo,
    LoginDesc
  }
};
</script>

<style scoped>
.bg-video {
  margin: 0 auto;
  height: 100vh;
  left: -150vw;
  position: relative;
  top: 0;
  opacity: 0.7;
}

.c-login {
  position: absolute;
  top: 0;
  left: 5vw;
  width: 90vw;
}

.logo {
  margin-bottom: 10vh;
}
</style>
