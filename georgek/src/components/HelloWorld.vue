<template>
  <div class="hello">
    <particles />
    <welcome />
  </div>
</template>

<script>
/**
 * Version v0.0.1
 */

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
<style scoped>
.hello {
  height: 100%;
}
</style>