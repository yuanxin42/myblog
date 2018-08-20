<template>
    <div id="container" class="highcharts-container">
    </div>
</template>
<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)

export default {
  props: ['options', 'styles'],
  name: 'highcharts',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      Highcharts.chart('container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: '扇区突出演示'
        },
        tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            },
            states: {
              hover: {
                enabled: false
              }
            },
            slicedOffset: 20, // 突出间距
            point: { // 每个扇区是数据点对象，所以事件应该写在 point 下面
              events: {
                // 鼠标滑过是，突出当前扇区
                mouseOver: function () {
                  this.slice()
                },
                // 鼠标移出时，收回突出显示
                mouseOut: function () {
                  this.slice()
                },
                // 默认是点击突出，这里屏蔽掉
                click: function () {
                  return false
                }
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: '浏览器访问量占比',
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true // 突出显示这个点（扇区），用于强调。
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['其他', 0.7]
          ]
        }]
      })
    }
  }
}

</script>
<style scoped>
.highcharts-container {
    width: 800px;
    height: 400px;
}
</style>
