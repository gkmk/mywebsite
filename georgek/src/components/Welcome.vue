<template>
  <div class="welcome">
    <img alt="Gkmk logo" src="../assets/img/gkmk.png" />
    <article>
      <h1>
        Welcome to
        <b>George Klincarski's</b> personal website!
      </h1>
      <h5>This website is not meant to be public, yet &#128517;</h5>
      <br />
      <p>
        Since you landed here already feel free to browse my
        <a href="https://github.com/gkmk">GitHub</a>
        or checkout my
        <a href="https://www.linkedin.com/in/g-klincarski/">LinkedIn</a>
      </p>
      <h4>
        Please wait until i learn
        <a href="https://vuejs.org/">Vue.js</a>
        <br />and build the cheapest;
        <br />high availability;
        <br />ultra blazing fast;
        <br />high tech personal portfolio website
      </h4>
    </article>
  </div>
</template>

<script>
export default {
  name: "Particles"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  padding-top: 5em;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
}
img {
  max-width: 100%;
  max-height: 300px;
  margin: 30px 0;
}
article {
  position: relative;
  height: 60%;
  z-index: 10;
}
</style>