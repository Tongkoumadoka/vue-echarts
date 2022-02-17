<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card"
                 shadow='hover'>
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"
                 shadow='hover'>
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"
                 shadow='hover'>
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"
                 shadow='hover'>
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
    <!-- 使用card组件进行布局 -->

  </div>
</template>

<script>
// 组件逻辑: 创建一个公共的card模块,而且每一个不同card又创建一个纯粹的引用模块去引用非公共card,完成功能的解耦,修改只需要修改对应的引用模块
import TotalSales from '../TotalSales'
import TotalOrders from '../TotalOrders'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'

export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>

<style lang='scss' scoped>
</style>

