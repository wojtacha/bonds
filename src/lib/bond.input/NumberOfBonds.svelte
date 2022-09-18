<script lang="ts">
 import Input from "./Input.svelte";
 import type { DUPA } from "../../types";
  let value = 1;
  function increment(event:CustomEvent<DUPA>) {
    value = event.detail.numberOfBonds;
  }
</script>

<div>
  <Input on:numberOfBonds="{increment}" />
  <div>
    <label for="bonds_in_currency">Wartość obligacji</label>
    <p id="bonds_in_currency">{ 100 * value +" zł" }</p>
  </div>
</div>

<style>
  .container {
    display: flex; /* establish flex container */
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: nowrap; /* default value; can be omitted */
    justify-content: space-between; /* switched from default (flex-start, see below) */
  }
</style>
