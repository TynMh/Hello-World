<template>
  <a-config-provider :locale="locale">
    <div class="home">

      <div style="background-color: #ececec; padding: 20px;">
        <a-row :gutter="[16,16]">
          <a-col :span="6">
            <a-card>
              <div>

                <a href="javascript:void(0);">
                  <a-statistic title="应用" valueStyle="color:green;" style="margin-right: 50px" :value="4" suffix="个">

                  </a-statistic>
                </a>


              </div>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <div>
                <a href="javascript:void(0);">
                  <a-statistic title="主机" valueStyle="color:green;" style="margin-right: 50px" :value="1" suffix="个">

                  </a-statistic>
                </a>
              </div>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <div>
                <a href="javascript:void(0);">
                  <a-statistic title="任务" valueStyle="color:green;" style="margin-right: 50px" :value="2" suffix="个">

                  </a-statistic>
                </a>
              </div>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <div>
                <a href="javascript:void(0);">
                  <a-statistic title="监控" valueStyle="color:green;" style="margin-right: 50px" :value="2" suffix="个">

                  </a-statistic>
                </a>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <div>
        <a-card title="报警趋势">
          <!--        <a slot="extra" href="#"></a>-->
          <a-cascader placeholder="过滤监控项，默认所有" slot="extra" :options="options" change-on-select @change="onChange"
                      style="width:260px;"/>

          <div>

            <div id="main" style="height: 400px;width:960px;" ref="chart">
              <!-- 别忘了给这个标签设置高度，不然看不到效果 -->
            </div>
          </div>


        </a-card>


      </div>
      <div style="margin-top: 30px">

        <a-row>
          <a-col :span="14">
            <a-card title="发布申请Top10">

              <a-button type="link" slot="extra">
                今日
              </a-button>
              <a-button type="link" slot="extra">
                本周
              </a-button>
              <a-button type="link" slot="extra">
                本月
              </a-button>
              <a-range-picker @change="onDateChange" slot="extra" style="width: 200px;"/>

              <div>
                <div id="pub" style="height: 300px;width:500px;" ref="pub">
                  <!-- 别忘了给这个标签设置高度，不然看不到效果 -->
                </div>
              </div>


            </a-card>
          </a-col>
          <a-col :span="9" :offset="1">
            <a-card title="最近30天登录">

              <a-list :data-source="login_list" style="overflow: scroll;height: 300px">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  {{ item }}
                </a-list-item>

              </a-list>
            </a-card>
          </a-col>
        </a-row>

      </div>


    </div>
  </a-config-provider>
</template>
<script>
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

  export default {
    name: 'ShowCenter',
    data() {
      return {
        locale: zhCN,
        login_list: [
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
          '11-18 13:12:02 管理员 通过 1.1.1.1 登录',
        ],
        options: [
          {
            value: 'test',
            label: '站点检测',
            children: [
              {
                value: '1',
                label: 'elatic',

              },
              {
                value: '2',
                label: 'www.baidu.com',

              },
              {
                value: '3',
                label: 'ssh端口',

              },
              {
                value: '4',
                label: 'spug官网',

              },
            ],
          },
          {
            value: 'jiangsu',
            label: '端口检测',
            children: [
              {
                value: 'nanjing',
                label: 'ssh端口',

              },
            ],
          },
          {
            value: 'jiangsu2',
            label: '进程检测',
            children: [
              {
                value: 'nanjing',
                label: 'aaa',

              },
            ],
          },
          {
            value: 'jiangsu3',
            label: '自定义脚本',
            children: [
              {
                value: 'nanjing',
                label: 'top',

              },
            ],
          },
        ],
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
      onDateChange(date, dateString) {
        console.log(date, dateString);
      },


    },
    created() {

      let token = sessionStorage.token || localStorage.token
      if (!token){
        this.$router.push('/');
      };

      // 校验token有效性

      this.$axios.post(`${this.$settings.HOST}/user/verify/`,{
        token: token,
      }).then((res)=>{
        sessionStorage.token = res.data.token;
      }).catch((error)=>{
        this.$router.push('/');
      })


      this.$nextTick(() => {
          //console.log(this.$refs);
          // data: ['2019-10-10', '2019-10-11', '2019-10-12', '2019-10-13', '2019-10-14', '2019-10-15', '2019-10-16']
          // 报警图表
          var myChart = this.$echarts.init(this.$refs.chart);
          var alert_option = {

            tooltip: {
              trigger: 'axis'
            },
            color: 'blue',
            grid: {
              left: '3%',
              right: '8%',  // 控制距离左右上下的边距
              bottom: '3%',
              containLabel: true // 完整显示，自动缩放
            },

            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2019-10-10', '2019-10-11', '2019-10-12', '2019-10-13', '2019-10-14', '2019-10-15', '2019-10-16']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '报警次数',
                type: 'line',
                stack: '总量',
                data: [0, 1, 0, 2, 1, 0, 1],
                smooth: true,
              },

            ]
          };

          myChart.setOption(alert_option);

          // 发布申请柱状图
          var myChart2 = this.$echarts.init(this.$refs.pub);
          var pub_option = {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['订单服务', 'test11', '系统管理', 'test'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334]
              }
            ]
          };

          myChart2.setOption(pub_option);


        }
      )
      // 注意：直接通过this.$refs.chart获取该标签不生效，因为vue的标签加载是异步的，可能标签加载还没完成就过去获取这个标签是拿不到的，所以我们需要延迟回调方法来等vue的dom更新完成之后，再获取标签
      // console.log('>>>>', this.$refs, typeof this.$refs.chart)
      // var echarts = require('echarts');


    }

  };
</script>
<style scoped>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }


</style>
