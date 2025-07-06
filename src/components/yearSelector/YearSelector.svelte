<script lang="ts">
import {onMount} from 'svelte'
import {since} from '$stores/tax.store'
const years = Array.from(Array(25).keys()).map(y => y + 2000)
let year = 2000
let yearEl: HTMLInputElement


onMount(() => {
  yearEl.value = "2000"
  yearEl.onfocus = function() { yearEl.value =''; };
  yearEl.onblur = function() { yearEl.value = yearEl.value || '2000'; }
})
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

  <section class="yearEstimate">
    <label for="year">Since</label>
    <div class="roller">
      <input type="text" id="year" name="year" list="years" bind:value={$since} bind:this={yearEl} >
      <datalist id="years">
        {#each years as year}
        <option value="{year}">{year}</option>
      {/each}
      </datalist>
    </div>
  </section>


<style>
    section.yearEstimate {
      display: grid;
      grid-template-columns: [label] 5rem [value] 6rem;
      grid-gap: 0.2rem 0.4rem;
      width: 267px;
      & label {
        justify-self: end;
        padding-right: 0.5rem;
        align-self: center;
      }
      & input {
        height: 1.5rem;
        width: 5.45rem;
      }
    }
</style>
