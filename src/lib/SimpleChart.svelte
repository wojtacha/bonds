<script lang="ts">
  import {
    Chart,
    registerables,
    type BubbleDataPoint,
    type ScatterDataPoint,
  } from "chart.js";
  import { onMount } from "svelte";

  Chart.register(...registerables);

  let barChartElement: HTMLCanvasElement;

  let chartValues = [120, 10, 51, 23, 20, 10, 51, 23, 30, 75, 51, 30, 75];
  let chartLabels = [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
  ];

  let chart: Chart;

  onMount(() => {
    chart = new Chart(barChartElement, {
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: chartValues,
          },
        ],
      },
    });
  });

  function removeData(chart: Chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  function addData(
    chart: Chart,
    label: [],
    data: number | ScatterDataPoint | BubbleDataPoint
  ) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }
</script>

<div
  class="chart-container"
  style="position: relative; height:30vh; width:60vw"
>
  <canvas bind:this={barChartElement} />
</div>

<style>
</style>
