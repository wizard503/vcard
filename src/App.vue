<template>
  <div id="app">
    <VCard/>
  </div>
</template>

<script>
import VCard from './components/VCard.vue';
export default {
  name: "App",
  components:{
    VCard
  }
};
</script>

<style scoped >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
