<template>
  <div class="waterwaves">
    <canvas id="canvas" width="400px" height="400px"></canvas>
    <slot v-if="$slots.title"></slot>
    <template v-else>
      <h3 class="num">{{ baseY }}</h3>
      <input type="range" class="swipe" min="0" max="100" step="1" v-model="baseY" />
    </template>
  </div>
</template>

<script>
import waterwaves from "./waterwaves";

export default {
  props: {
    // 水平线
    value: {
      type: Number,
      default: 50
    },
    options: {
      type: Object,
      default: () => ({
        cW:130,
        cH:130,
      })
    }
  },
  data() {
    return {
      baseY: this.value,
      waterwaves: null
    };
  },
  watch: {
    baseY(newVal, oldVal) {
      this.waterwaves.options.baseY = newVal;
      this.$emit("input", newVal);
    }
  },
  methods: {
    initWaterWaves() {
      this.waterwaves = new WaterPolo("canvas", {...this.options,baseY:this.baseY});
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
