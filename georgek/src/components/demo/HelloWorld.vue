<script>
import Particles from "./Particles.vue";
import Welcome from "./Welcome.vue";

export default {
  name: "HelloWorld",
  components: {
    Particles,
    Welcome
  }
};
</script>

<template>
  <div class="hello">
    <particles />
    <welcome />
  </div>
</template>

<style scoped>
.hello {
  height: 100%;
}
</style>