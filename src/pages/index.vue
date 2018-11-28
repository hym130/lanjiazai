<template>
  <div class="index">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import option from "../assets/js/map-option.js"; //引入配置项
import "../../node_modules/echarts/map/js/china.js";
//import "../assets/js/china.js"; //引入china.js地图文件
// import '../assets/js/macarons.js'
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.drawLine();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  margin: 0 auto;
}
</style>


