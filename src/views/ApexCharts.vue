<template>
  <div class="chart">
    <apexcharts
      width="900"
      height="500"
      :options="chartOptions"
      :series="dataBars"
    />
  </div>
  <div class="chart">
    <apexcharts
      width="900"
      height="500"
      :options="chartOptionsLine"
      :series="dataBarsLine"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'ApexCharts',
  components: {
    apexcharts: VueApexCharts,
  },

  setup() {
    const chartOptions = {
      chart: {
        type: 'bar',
        stacked: true,

        toolbar: {
          show: true
        }
      },
      grid: {
        strokeDashArray: 5,
        borderColor: '#E0E0EA',
        xaxis: {
          categories: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
          ],
          lines: {
            show: false
          }
        }
      },
    };
    const chartOptionsLine = {
      chart: {
        type: 'area',
        selection: {
          enabled: true,
          xaxis: {
            categories: [
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
            ],
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: .9,
            opacityTo: 0,
            stops: [0, 10, 60]
          },
        },
      },
      grid: {
        borderColor: '#E0E0EA',
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: false
          }
        }
      },


    };

    const dataBars = [
      {
        name: 'Выполненные',
        data: [4, 3, 1, 4, 9, 7, 4, 4, 2, 1, 8],
        color: '#AFC5FF',
      },
      {
        name: 'Переходящие',
        data: [1, 3, 1, 4, 3, 6, 3, 0, 9, 3, 2],
        color: '#A3CFBB',
      },
      {
        name: 'Просроченные',
        data: [1, 3, 1, 4, 3, 6, 3, 1, 2, 3, 5],
        сolor: '#FFA722',
      },
    ];
    const dataBarsLine = [
      {
        name: 'Выполненные',
        color: '#AFC5FF',
        data: [4, 3, 1, 4, 9, 7, 4, 4, 2, 1, 8],
      },
    ];

    return {chartOptions, dataBars, dataBarsLine, chartOptionsLine};
  },
};
</script>

<style lang="scss">
.chart {
  display: flex;
  max-width: 920px;
  height: 70vh;
  margin: 0 auto;
}
</style>
