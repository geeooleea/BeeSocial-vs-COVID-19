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
      let db;

      window.handleOpenURL = url => {
        url = url.replace("beesocial://", "").split("/");
        switch (url[0]) {
          case "auth":
            if (url[1] == "ok") {
              // db.transaction(
              //   function(tx) {
              //     tx.executeSql(
              //       "CREATE TABLE IF NOT EXISTS UserData (token)"
              //     );
              //     tx.executeSql("INSERT INTO UserData VALUES (?,?)", [
              //       url[2]
              //     ]);
              //   },
              //   function(error) {
              //     console.log("Transaction ERROR: " + error.message);
              //   },
              //   function() {
              //     console.log("Populated database OK");
              //   }
              // );
              this.$router.replace("Activities");
              console.log(url[2]);
            }
            break;
        }
      };

      // db = window.sqlitePlugin.openDatabase(
      //   {
      //     name: "beesocial",
      //     location: "default"
      //   },
      //   () => {
      //     this.$store.commit("saveDb", db);
      //   }
      // );
    });
  }
};
</script>