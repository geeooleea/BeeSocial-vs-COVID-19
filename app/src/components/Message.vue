<template>
  <div>
    <div class="message">
      <div class="username" ></div>
      <div style="margin-top: 5px"></div>
      <div class="content">
        <div v-html="message.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      username () {
        return "Geeoleea"
      }
    },
    methods: {
      imageLoad () {
        // this.$emit('imageLoad')
      }
    }
  }
</script>

<style>
  span.emoji {
    font-size: 20px;
    vertical-align: middle;
    line-height: 2;
  }
</style>