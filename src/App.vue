<template>
  <div id="app">
    <WaterWaves />
  </div>
</template>

<script>
import WaterWaves from './lib/waterwaves.vue'

export default {
  name: 'app',
  components: {
    WaterWaves
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
