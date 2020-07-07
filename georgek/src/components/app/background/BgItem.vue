<template>
  <div>
    <transition
      appear
      name="fadeIn"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      v-on:before-enter="beforeEnter"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <div v-if="show" class="bg-item animated text-center">CSS</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BackgroundItem",
  data: function() {
    return {
      show: true,
      labels: [
        "css",
        "php",
        "mysql",
        "aws",
        "game development",
        "web development",
        "ci/cd",
        "git",
        "c#",
        "unity",
        "vue",
        "laravel",
        "bootstrap",
        "animate.js",
        "redis",
        "mongo",
        "python",
        "celery",
        "django",
        "angular",
        "sass",
        "paas",
        "saas",
        "oop",
        "dots",
        "dod",
        "linux",
        "windows",
        "docker",
        "kubernetes",
      ]
    };
  },
  methods: {
    // --------
    // ENTERING
    // --------
    beforeEnter: function(el) {
      el.style.top =
        Math.floor(
          Math.random() * (document.body.clientHeight - el.clientHeight - 100)
        ) + "px";
      el.style.left =
        Math.floor(
          Math.random() * (document.body.clientWidth - el.clientWidth - 100)
        ) + "px";
      el.style.fontSize = 24 + Math.floor(Math.random() * 30) + "px";
      var colors = ["#D8DBE2", "#A9BCD0", "#58A4B0", "#373F51"];
      el.style.color = colors[Math.floor(Math.random() * 4)];
      el.innerHTML = this.labels[
        Math.floor(Math.random() * this.labels.length)
      ];
    },
    afterEnter: function() {
      // ...
      setTimeout(() => (this.show = false), 3000 + Math.random() * 2000);
    },
    afterLeave: function() {
      setTimeout(() => (this.show = true), 500 + Math.random() * 2000);
    }
  }
};
</script>

<style>
.bg-item {
  position: absolute;
  text-transform: uppercase;
}
</style>
