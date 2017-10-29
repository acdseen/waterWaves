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
## demo
<iframe height='302' scrolling='no' title='zPYmPY' src='//codepen.io/262/embed/zPYmPY/?height=302&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/262/pen/zPYmPY/'>zPYmPY</a> by acdseen  (<a href='https://codepen.io/262'>@262</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
