<template>
  <v-container fluid class="padd">
    <v-row dense>
      <v-card class="mx-auto paddc" max-width="350" color="#26c6da" dark v-for="activity in activities" :key="activity.message">
        <v-img
          :src=activity.img
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>{{activity.title}}</v-card-title>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "ActivityList",

  data() {
    return {
      activities: null
    }
  },

  mounted() {
    axios.get('http://localhost:3000/activities')
    .then((res) => {
      this.activities = res.data;
    })
  },

  methods: {
  }
};
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