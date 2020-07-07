<template>
  <div>
    <background />
    <div class="container">
      <div class="row pt-5">
        <div class="col">
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p
              class="lead"
            >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from "./background/Background";

export default {
  name: "MyWebsite",
  components: {
    Background
  }
};
</script>

<style>
</style>
