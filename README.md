# 这是水滴球动画
## 使用方法
引入
```
<script src='waterPolo.js'></script>
//AMD/CMD
require('waterPolo')
```
使用
```
 waterPolo('canvas');
```
配置项
```
var options={
    //容器距边缘的距离
    wrapW:3,
    //canvas属性
    cW:300,
    cH:300,
    lineWidth : 2,
    //液面位置 百分比表示
    baseY: 20,
    //水面起始位置
    nowRange: 0,
    //线条颜色
    lineColor:'rgb(176,204,53)',
    //上层颜色
    oneColor:'rgba(176,204,53,.6)',
    //下层颜色
    twoColor:'rgba(176,204,53,.4)',
    //上层波浪宽度，数越小越宽
    oneWaveWidth:0.06,
    //下层波浪宽度
    twoWaveWidth:0.06,
    //上层波浪高度，数越大越高
    oneWaveHeight:4,
    //下层波浪高度
    twoWaveHeight:4,
    //上层波浪x轴偏移量
    oneOffsetX:10,
    //下层波浪x轴偏移量
    twoOffsetX:20,
    //波浪滚动速度，数越大越快
    speed:0.2
    }
```
![img](https://github.com/acdseen/acdseen.github.io/blob/master/img/7.gif)
