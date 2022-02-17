<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
// title,value是根据传入数据进行变化的所以需要设置为绑定数据接收
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.title {
  // 规范部分样式
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
  // background: skyblue;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>


<style lang="scss">
// 全局的公共样式
// 可以全局重用
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

.increace {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decreace {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
