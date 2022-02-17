<template>
  <common-card title="累计销售额"
               value="$ 345661">
    <!-- chart插槽 -->
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increace"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">5.33%</span>
          <div class="decreace"></div>
        </div>
      </div>
    </template>
    <!-- 底部插槽 -->
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">$ 3000,000,000</span>
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
  methods: {}
}
</script>

<style lang='scss' scoped>
// 因为有两个compare
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    height: 50%;
    font-size: 12px;
    color: #666;
  }
}
</style>
