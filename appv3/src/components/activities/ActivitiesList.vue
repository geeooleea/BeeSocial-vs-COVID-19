<template>
    <div class="container outer-wrapper">
         <!-- :style="{ backgroundImage: `url(${backgroundUrl})`}" -->
        <Card v-for="i in data" v-bind:key="i.id" :title="i.title" :id="i.id" :img="i.img"></Card>
    </div>
</template>

<script>
import Card from "@/components/activities/Card.vue";
import backgroundUrl from '@/assets/vectors/actvbg.svg';

export default {
    name: 'ActivitiesList',
    data() {
        return {
            data: null,
            backgroundUrl: backgroundUrl
        }
    },
    components: {
        Card
    },
    mounted:  function() {
        this.data = JSON.parse('[{"id":1,"title":"Yoga","description":"Stretch body and mind with flexibility workouts and meditation.","img":"img/activities/yoga.jpg"},{"id":2,"title":"House Cleaning","description":"Spring is here, time to refresh our quarantine cave!","img":"img/activities/house_cleaning"},{"id":3,"title":"Working from Home","description":"Kickstart your productivity even when working from home.","img":"img/activities/working_from_home"},{"id":4,"title":"Working Out","description":"Activate your body while staying in your home or backyard.","img":"img/activities/working_out"},{"id":5,"title":"Studying","description":"Get your mind flowing.","img":"img/activities/studying"}]');
        console.log(this.data);
    }
}
</script>

<style scoped>
.outer-wrapper {
    padding: 0;
    height: 110vh;
    position: relative;
    top: -10vh;
    z-index: 1;
    padding-top: 25vh;
    overflow: auto;
}
</style>