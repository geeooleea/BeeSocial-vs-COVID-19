<template>
    <div class="container wrapper">
        <IntroActivities></IntroActivities>
        <ActivitiesList></ActivitiesList>
    </div>
</template>

<script>
import IntroActivities from '@/components/activities/IntroActivities.vue';
import ActivitiesList from '@/components/activities/ActivitiesList.vue';

export default {
    name: 'Activities',
    components: {
      IntroActivities,
      ActivitiesList
    }
}
</script>

<style scoped>
.wrapper {
  padding: 0;
}
</style>