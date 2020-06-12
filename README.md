# waterwaves
---
一个vue水球插件

![演示动图](./static/soogif.gif)

## Demo

https://sortablejs.github.io/Vue.Draggable/

## 插件的安装

### With npm or yarn
```
npm i -S waterwaves
yarn add waterwaves
```

### 引入插件
```
import WaterWaves from 'waterwaves'

Vue.use(WaterWaves)
```
or
```
<script src="node_modules/waterwaves/scripts/WaterPolo.umd.min.js"></script>
```

### 基本用法
```
<WaterWaves v-model="level" />
``` 
or
```
<canvas id="canvas" width="400px" height="400px"></canvas>
<script>
  var option={
      cW:130,
      cH:130,
      baseY:50,
      nowRange:0
  };
  var water=new WaterPolo('canvas',option);
</script>
```

### API

参数|说明|类型|默认值
-|-|-|-
v-model|绑定值（液面高度百分比）|String\|Number|50
options|配置选项|Object|见下表

#### options

参数|说明|类型|默认值
-|-|-|-
wrapW|外边距|Number|3
cW|宽|Number|130
cH|高|Number|130
baseY|液面高度|Number|20
nowRange|液面起始位置|Number|0
lineColor|线条颜色|string|'rgb(176,204,53)'
oneColor|上层颜色|string|'rgba(176,204,53,.6)'
twoColor|底层颜色|string|'rgba(176,204,53,.4)'
oneWaveWidth|上层波长（数越小越宽）|Number|0.06
twoWaveWidth|底层波长|Number|0.06
oneWaveHeight|上层波峰（数越大越高）|Number|4
twoWaveHeight|底层波峰|Number|4
oneOffsetX|上层波浪x轴偏移量|Number|10
oneOffsetX|底层波浪x轴偏移量|Number|20
speed|波浪滚动速度（数越大越快）|Number|0.2

#### event
事件名称|说明|回调参数
-|-|-
change|在v-model值改变时触发|(value: number\|string)