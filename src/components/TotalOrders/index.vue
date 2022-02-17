<template>
  <common-card title="累计订单量"
               value="111,432,555">
    <template>
      <!-- 中间为图表 -->
      <!-- 1. -->
      <div id="total-orders-chart"
           :style="{width:'100%',height:'100%'}">
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">$ 20000</span>
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
    const charDom = document.getElementById('total-orders-chart')
    console.log(charDom)
    // (1)初始化 dom 样式(light,dark) option{render}
    const chart = this.$echarts.init(charDom)
    // (2)传入配置对象
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
        // data: ['a', 'b', 'c', 'd', 'e']
      },
      yAxis: {
        show: false
      },
      // 对应图表,456个series就是一张图,data一般是api返回
      series: [
        {
          data: [500, 205, 340, 640, 560, 510, 280, 530, 760, 250],
          type: 'line',
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: '0'
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
    window.addEventListener('resize', function () {
      chart.resize()
    })
  }
}
</script>

<style lang='scss' scoped>
#total-orders-chart {
  display: flex;
}
</style>
