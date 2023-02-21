<template>
  <div class="chart">
    <Bar :data="dataBars" :options="options"/>
  </div>
  <div class="chart">
    <Line :data="dataLine" :options="optionsLine"/>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import {Bar, Line} from 'vue-chartjs';

export default {
  name: 'VueChartjs',
  components: {Bar, Line},

  setup() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Количество задач',
          font: {
            weight: 'bold',
            size: '20'
          }
        },
        legend: {
          position: 'bottom',
        },
      },
      scales: {
        y: {
          stacked: true,
          grid: {
            drawOnChartArea: true,
            drawTicks: true,
            borderColor: '#E0E0EA',
            borderDash: [5, 5],
          },
          ticks: {
            min: 0,
            max: 25,
            stepSize: 1
          },
          title: {
            display: true,
            text: 'Количество задач; шт',
            color: '#8A8A9D',
            font: {
              size: 14,
              style: 'normal',
            },
          },


        },
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
      },
    };

    const dataBars = {
      labels: [
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
      datasets: [
        {
          label: 'Выполненные',
          backgroundColor: '#AFC5FF',
          maxBarThickness: 48,
          tooltips: true,
          data: [4, 3, 1, 4, 9, 7, 4, 4, 2, 1, 8],
        },
        {
          label: 'Переходящие',
          backgroundColor: '#A3CFBB',
          maxBarThickness: 48,
          data: [1, 3, 1, 4, 3, 6, 3, 0, 9, 3, 2],
        },
        {
          label: 'Просроченные',
          backgroundColor: '#FFA722',
          maxBarThickness: 48,
          data: [1, 3, 1, 4, 3, 6, 3, 1, 2, 3, 5],
        },
      ],
    };

    const optionsLine = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        title: {
          display: true,
          text: 'Использование рабочего времени',
          font: {
            weight: 'bold',
            size: '20'
          }
        },
        legend: {
          display: false,
        },

      },
      scales: {
        y: {
          grid: {
           display:false
          },
          title: {
            display: true,
            text: 'Количество задач; шт',
            color: '#8A8A9D',
            font: {
              size: 14,
              style: 'normal',
            },
          },
          suggestedMin: 0,
          suggestedMax: 10
        },
        x: {
          grid: {
            borderDash: [5, 2,]
          },
        },
      },
    };

    const dataLine = {
      labels: [
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
      datasets: [
        {
          label: 'Выполненные',
          pointStyle: false,
          tooltips: true,
          borderColor: '#AFC5FF',
          cubicInterpolationMode: 'monotone',
          fill: true,
          // backgroundColor: '#AFC5FF',
          backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(180, 180, 0, 0);

            gradient.addColorStop(0, '#AFC5FF');
            gradient.addColorStop(.4, '#AFC5FF');
            gradient.addColorStop(.6, 'white');

            return gradient;
          },
          data: [4, 3, 6, 4, 8, 7, 4, 4, 2, 8, 9],
        },
      ],
    };

    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      PointElement,
      LineElement,
      Legend,
      Tooltip,
      Title,
      Filler,
    );

    return {options, dataBars, optionsLine, dataLine};
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
