<template>
  <canvas id="drawHeart" width="1903" height="937"></canvas>
</template>

<script setup>
import {nextTick, onMounted} from "vue";

var hearts = [];
var canvas = "";
var ctx = "";
var wW = window.innerWidth;
var wH = window.innerHeight;
var heartImage = "";
onMounted(() => {
  nextTick(() => {
    // 获取canvas节点
    canvas = document.getElementById('drawHeart');
    ctx = canvas.getContext('2d');
    heartImage = new Image();
    // 绘制爱心svg
    heartImage.src = require('./heart-rate.svg');
    // 初始化方法
    init();
  })
})

// 监听屏幕变化
window.addEventListener('resize', function () {
  wW = window.innerWidth;
  wH = window.innerHeight;
});

// 初始化方法
function init() {
  var num = 100;
  canvas.width = wW;
  canvas.height = wH;
  for (var i = 0; i < num; i++) {
    hearts.push(new Heart(i % 5));
  }
  // 请求动画帧,重新屏幕绘制频率
  requestAnimationFrame(render);
}
// 获取随机的颜色用来给字体赋值
function getRandomColor() {
  var val = Math.random() * 10;
  if (val > 0 && val <= 1) {
    return '#00f';
  } else if (val > 1 && val <= 2) {
    return '#f00';
  } else if (val > 2 && val <= 3) {
    return '#0f0';
  } else if (val > 3 && val <= 4) {
    return '#368';
  } else if (val > 4 && val <= 5) {
    return '#08e2af';
  } else if (val > 5 && val <= 6) {
    return '#66e44c';
  } else if (val > 6 && val <= 7) {
    return '#f50';
  } else if (val > 7 && val <= 8) {
    return '#fc5531';
  } else if (val > 8 && val <= 9) {
    return '#5be9e9';
  } else {
    return '#d41d50';
  }
}
// 随机绘制文字
function getRandomText() {
  var val = Math.random() * 15;
  if (val > 1 && val <= 3) {
    return '爱你一辈子';
  } else if (val > 3 && val <= 5) {
    return '感谢你';
  } else if (val > 5 && val <= 8) {
    return '喜欢你';
  } else if (val > 8 && val <= 10) {
    return '表白赵佳宁';
  } else if (val > 10 && val <= 12) {
    return '哈哈哈';
  } else if (val > 12 && val <= 14) {
    return '爱你~';
  } else {
    return 'I Love You';
  }
}
// 爱心加载
function Heart(type) {
  this.type = type;
  this.x = Math.random() * wW;
  this.y = Math.random() * wH;
  this.opacity = Math.random() * .5 + .5;
  this.vel = {
    x: (Math.random() - .5) * 5, y: (Math.random() - .5) * 5
  }
  this.initialH = wH * .5;
  this.targetScale = Math.random() * .15 + .02;
  this.scale = Math.random() * this.targetScale;
  this.fx = Math.random() * wW;
  this.fy = Math.random() * wH;
  this.fs = Math.random() * 10;
  this.text = getRandomText();
  this.fvel = {
    x: (Math.random() - .5) * 5, y: (Math.random() - .5) * 5, f: (Math.random() - .5) * 2
  }
}

Heart.prototype.draw = function () {
  ctx.save();
  ctx.globalAlpha = this.opacity;
  ctx.drawImage(heartImage, this.x, this.y, this.width, this.height);
  ctx.scale(this.scale + 1, this.scale + 1);
  if (!this.type) {
    ctx.fillStyle = getRandomColor();
    ctx.font = 'italic ' + this.fs + 'px sans-serif';
    ctx.fillText(this.text, this.fx, this.fy);
  }
  ctx.restore();
}
Heart.prototype.update = function () {
  this.x += this.vel.x;
  this.y += this.vel.y;
  if (this.x - this.width > wW || this.x + this.width < 0) {
    this.scale = 0;
    this.x = Math.random() * wW;
    this.y = Math.random() * wH;
  }
  if (this.y - this.height > wH || this.y + this.height < 0) {
    this.scale = 0;
    this.x = Math.random() * wW;
    this.y = Math.random() * wH;
  }
  this.scale += (this.targetScale - this.scale) * .1;
  this.height = this.scale * this.initialH;
  this.width = this.height * 1.4;
  this.fx += this.fvel.x;
  this.fy += this.fvel.y;
  this.fs += this.fvel.f;
  if (this.fs > 50) {
    this.fs = 2;
  }
  if (this.fx - this.fs > wW || this.fx + this.fs < 0) {
    this.fx = Math.random() * wW;
    this.fy = Math.random() * wH;
  }
  if (this.fy - this.fs > wH || this.fy + this.fs < 0) {
    this.fx = Math.random() * wW;
    this.fy = Math.random() * wH;
  }
}

function render() {
  ctx.clearRect(0, 0, wW, wH);
  for (var i = 0; i < hearts.length; i++) {
    hearts[i].draw();
    hearts[i].update();
  }
  requestAnimationFrame(render);
}

</script>

<style scoped>
#drawHeart{
  background-color:lightpink ;
}
</style>
