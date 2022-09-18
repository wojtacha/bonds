<script lang="ts">
import type { TimeDisplayFormat } from "chart.js";

  import {
    count,
    getNumberOfEntries,
    inflationProvider
  } from "../data-store";

  import type { YearInflation } from "../data-store";

  let tableData: Array<YearInflation>;

  count.subscribe((value) => {
    tableData = getNumberOfEntries(value);
  });

  function updateInflation(row:YearInflation) {
    inflationProvider.update(() => row);
  }
</script>

  <div>
    <table>
      <thead>
        <tr>
          {#each ["Rok", "Inflacja"] as heading}
            <th class="table-heading">{heading}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each Object.values(tableData) as row}
          <tr>
            <th>{row.year}</th>
            <span class="input-span">
              <input
                type=number
                class="input-itself"
                bind:value="{row.inflation}"
                on:change="{updateInflation(row)}"
              />
            </span>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>





<!-- <style>
.input-span {
    /* display: block; */
    overflow: hidden;
    margin: 0px;
  }

  .input-itself {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
    text-align: center;
  }

  table {
    border-collapse: separate;
    border: solid black 1px;
    border-radius: 3px;
  }

  th:first-child {
    border-left: none;
  }
</style> -->
