<template>
  <div id="app">
    <hello-world/>
    <!-- <my-website/> -->
  </div>
</template>

<script>
import HelloWorld from './components/demo/HelloWorld.vue'
// import MyWebsite from './components/app/MyWebsite.vue'

export default {
  name: 'App',
  data: function() {
    return {
      DEMO_MODE: true
    }
  },
  components: {
    HelloWorld,
    // MyWebsite
  }
}
</script>

<style>
#app {
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
