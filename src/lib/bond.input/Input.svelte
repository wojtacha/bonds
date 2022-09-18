<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { DUPA } from "../../types";

  const dispatch = createEventDispatcher<{numberOfBonds:DUPA}>();
  let numberOfBonds = 1;

  function apply(number:number) {
    dispatch("numberOfBonds", {
      numberOfBonds: number,
    });
    return ()=>{}
  }

  export { numberOfBonds } 
</script>

<form>
  <label for="number-of-bonds">Ilość obligacji</label>
  <input
    id="number-of-bonds"
    class="input"
    type="number"
    bind:value="{numberOfBonds}"
    on:change="{apply(numberOfBonds)}"
    min="0"
  />
</form>

<style>
  form {
    text-align: center;
    padding: 1em;
  }

  input {
    min-width: 7em;
  }
</style>
