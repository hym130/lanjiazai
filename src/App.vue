<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    console.log(this.datalist, "ppp");
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
