<template>
  <common-card title="累计用户数"
               value="8,664">
    <template>
      <!-- 中间为图表 -->
      <!-- 1.一定要指定宽高 -->
      <div id="total-total-users-chart"
           :style="{width:'100%',height:'100%'}">
      </div>
    </template>
    <template v-slot:footer>
      <div class="total-total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="increace"></div>
        <span class="month">月同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="decreace"></div>
      </div>

    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../utils/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const charDom = document.getElementById('total-total-users-chart')
    // (1)初始化 dom 样式(light,dark) option{render}
    const chart = this.$echarts.init(charDom)
    // (2)传入配置对象
    chart.setOption({
      // 设置y轴为type,x轴为value
      xAxis: {
        type: 'value',
        show: false,
        boundaryGap: false
        // data为x轴所有坐标
      },
      yAxis: {
        type: 'category',
        show: false
      },
      // 对应图表,456个series就是一张图,data一般是api返回
      // 合并只需要写一个barwidth
      series: [
        {
          data: [60],
          stack: '总量',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [100],
          itemStyle: {
            color: '#eee'
          }
        }
      ],
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
    })

    // 实现自适应
    window.addEventListener('resize', function () {
      chart.resize()
    })
  }
}
</script>

<style lang='scss' scoped>
.total-total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
