<template>
  <div class="waterwaves">
    <canvas id="canvas" width="400px" height="400px"></canvas>
  </div>
</template>

<script>
import WaterPolo from "./waterwaves.js";

export default {
  name: "WaterWaves",
  props: {
    // 水平线
    value: {
      type: String || Number,
      default: 50
    },
    // 配置参数
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      waterwaves: null
    };
  },
  watch: {
    value(newVal) {
      this.waterwaves.options.baseY = newVal;
      this.$emit("change", newVal);
    },
    options(newVal) {
      Object.keys(newVal).map(key => {
        this.waterwaves.options[key] = newVal[key];
      });
    }
  },
  methods: {
    initWaterWaves() {
      console.log(WaterPolo)
      this.waterwaves = new WaterPolo("canvas", { ...this.options, baseY: this.value });
    }
  },
  mounted() {
    this.initWaterWaves();
  }
};
</script>

<style scope>
.swipe::before {
  color: black;
  content: attr(min);
  padding-right: 10px;
}
.swipe::after {
  color: black;
  content: attr(max);
  padding-left: 10px;
}

.num {
  text-align: center;
}
</style>
