<template>
    <div class="container outer-wrapper">
        <Card></Card>
    </div>
</template>

<script>
import Card from "@/components/activities/Card.vue";

export default {
    name: 'ActivitiesList',
    components: {
        Card
    }
}
</script>

<style scoped>
.outer-wrapper {
    padding: 0;
    height: 100vh;
    position: relative;
    top: -10vh;
    z-index: 1;
    padding-top: 20vh;
}
</style>