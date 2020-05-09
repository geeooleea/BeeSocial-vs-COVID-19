<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.addEventListener("deviceready", () => {
      window.handleOpenURL = url => {
        url = url.replace("beesocial://", "").split("/");
        switch (url[0]) {
          case "auth":
            if (url[1] == "ok") {
              this.$router.replace("Activities");
              console.log(url[2]);
            }
            break;
        }
      };
    });
  }
};
</script>