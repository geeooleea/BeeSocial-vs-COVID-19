<template>
  <div class="container">
    <svg viewBox="-70 -350 500 400">
      <path id="curve" d="M0 39C115.945 -15.794 267.178 -7.3643 368 39" />
      <text width="500">
        <textPath xlink:href="#curve">BeeSocial</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
path {
  fill: transparent;
}

text {
  font-family: Pacifico;
  font-size: 90px;
}
</style>