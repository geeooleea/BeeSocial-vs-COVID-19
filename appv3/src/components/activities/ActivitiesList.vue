<template>
    <div class="container outer-wrapper">
        <Card v-for="i in 10" v-bind:key="i"></Card>
    </div>
</template>

<script>
import Card from "@/components/activities/Card.vue";

export default {
    name: 'ActivitiesList',
    data() {
        return {
            data: null
        }
    },
    components: {
        Card
    },
    mounted:  function() {
    }
}
</script>

<style scoped>
.outer-wrapper {
    padding: 0;
    height: 125vh;
    position: relative;
    top: -10vh;
    z-index: 1;
    padding-top: 25vh;
    overflow: auto;
}
</style>