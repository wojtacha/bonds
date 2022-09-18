<script lang="ts">
  import Table from "./lib/Table.svelte";
  import SimpleChart from "./lib/SimpleChart.svelte";
  import BondsBar from "./lib/BondsBar.svelte";
  import Number from "./lib/bond.input/NumberOfBonds.svelte";
  // import Chart from "./lib/Chart.svelte";
  // import Drawing from "./lib/Drawing.svelte";
</script>

<div>
  <div class="absolute top-5 left-5"><Number /></div>
  <div class="absolute top-5 left-3/4"><BondsBar /></div>
  <div class="absolute top-30 left-5"><Table /></div>
</div>

<SimpleChart />


<!-- <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->
