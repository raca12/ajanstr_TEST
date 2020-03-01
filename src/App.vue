<template>
  <div id="app">
    <headers></headers>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <footers></footers>
  </div>
</template>

<script>
import headers from "./components/header.vue";
import footers from "./components/footer.vue";
export default {
  name: "App",
  components: { headers, footers }
};
</script>
<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "./assets/css/flexboxgrid.min.css";
@import "./assets/css/global.css";
@import "./assets/css/custom.css";

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter {
  opacity: 1;
  transform: translateY(-30%);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
</style>
