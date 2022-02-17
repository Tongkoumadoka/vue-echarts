<template>
  <common-card title="今日交易用户数"
               value="81,104">
    <template>
      <!-- 中间为图表 -->
      <!-- 1.一定要指定宽高 -->
      <div id="total-today-users-chart"
           :style="{width:'100%',height:'100%'}">
      </div>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
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
    const charDom = document.getElementById('total-today-users-chart')
    console.log(charDom)
    // (1)初始化 dom 样式(light,dark) option{render}
    const chart = this.$echarts.init(charDom)
    // (2)传入配置对象
    chart.setOption({
      color: ['#3398DB', '#eeedsa'],
      xAxis: {
        type: 'category',
        show: false,
        // boundaryGap: false,
        // data为x轴所有坐标
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ]
      },
      yAxis: {
        show: false
      },
      // 对应图表,456个series就是一张图,data一般是api返回
      series: [
        {
          data: [
            410, 82, 200, 334, 39, 330, 220, 150, 82, 200, 134, 290, 330, 150
          ],
          type: 'bar',
          barWidth: '60%'
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
</style>
