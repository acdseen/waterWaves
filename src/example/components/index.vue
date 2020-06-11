<template>
  <div>
    <water-waves v-model="level" />
    <h3 class="num">{{ level }}</h3>
    <input type="range" class="swipe" min="0" max="100" step="1" v-model="level" />
  </div>
</template>

<script>
import WaterWaves from "../../lib";

export default {
  components: { WaterWaves },
  data() {
    return {
      level: '30'
    };
  }
};
</script>

<style></style>
