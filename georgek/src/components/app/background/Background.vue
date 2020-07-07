<template>
  <div id="fancy-bg">
    <bg-item/>
    <bg-item/>
    <bg-item/>
    <bg-item/>
    <bg-item/>
  </div>
</template>

<script>
import BgItem from './BgItem';

export default {
  name: "Background",
  components: {
    BgItem
  }
};
</script>

<style>
#fancy-bg {
  width: 100%;
  height: 100vh;
}
</style>
