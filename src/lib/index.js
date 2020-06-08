import WaterWaves from './waterwaves.vue'

WaterWaves.install = function(Vue) {
  Vue.component(WaterWaves.name, WaterWaves);
};

export default WaterWaves;