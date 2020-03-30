<template>
  <v-container fluid class="padd">
    <v-row dense>
      <v-card
        class="mx-auto paddc"
        max-width="350"
        color="#26c6da"
        dark
        v-for="activity in activities"
        :key="activity.message"
        v-on:click="pa(activity.id)"
        @click.stop="dialog = true"
      >
        <v-img
          :src="activity.img"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>{{activity.title}}</v-card-title>
        </v-img>
      </v-card>
    </v-row>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">And the winner is...</v-card-title>
        <div class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <v-card-text>
          <v-spacer></v-spacer>
          <p
            class="subtitle-1"
          >...just like Oscars you have to wait a bit, but don't worry a buddy is right around the corner</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import data from "../data.js";

let a = {
  name: "ActivityList",

  data() {
    return {
      activities: null,
      polling: null,
      dialog: null
    };
  },

  mounted() {
    axios.get("http://localhost:3000/activities").then(res => {
      this.activities = res.data;
    });
  },

  methods: {
    pa(a) {
      axios
        .post("http://localhost:3000/shared_activity", {
          id: a,
          user: data.getUser().data.id
        })
        .then(res => {
          this.pollData(res);
        });
    },
    pollData(res) {
      this.polling = setInterval(() => {
            axios.get("http://localhost:3000/buddy/" + res.data.id)
            .then(res => {
              if (res.data.matched === true) {
                clearInterval(this.polling)
                this.$router.push('chat');
              }
            });
          }, 1000);
    }
  }
};

export default a;
</script>
<style scoped>
.padd {
  margin-top: 15vw;
}
.paddc {
  margin-top: 2vh;
  z-index: 4;
}
</style>