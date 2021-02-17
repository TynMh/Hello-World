<template>
    <div class="show_center">
      <h1>数据中心展示页面</h1>
      <a-button type="primary">
      Primary
      </a-button>
      <div ref="main" id="main" style="width: 600px;height:400px;"></div>
    </div>

</template>

<script>
    export default {
        "name": "ShowCenter",
        mounted() {
              var myChart = this.$echarts.init(this.$refs.main);
              var option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
        }
    ]
};

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          }
    }
</script>

<style scoped>
    h1{
      color: red;
    }
</style>
