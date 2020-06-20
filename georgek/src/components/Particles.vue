<template>
  <div id="particles-js"></div>
</template>

<script>
require("particles.js");

export default {
  name: "Particles",
  mounted: function() {
    this.$nextTick(function() {
      window.particlesJS.load(
        "particles-js",
        "./assets/particlesjs-config.json",
        function() {
          console.log("callback - particles-js config loaded");
        }
      );
    });
  }
};
</script>
<style scoped>
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>