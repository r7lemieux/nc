<script lang="ts">
  import {contributions, tax} from '$stores/tax.store'
  
  let {start = $bindable(), done} = $props()
  start = (taxPaid: number): void => {
    const el1 = document.getElementById('contribution')
    el1!.style.visibility = 'visible'
    el1!.style.color = '#810'
    el1!.style.transition = 'visibility 0.5s, color 1s'

    const el = document.getElementById('amount')
    el!.style.fontSize = '2rem'
    el!.style.color = '#F00'
    el!.style.transition = 'font-size 2s, color 1s ease 1s'
    done()
  }
  let contribution = '' //$derived(warContribution(tax).toLocaleString())

  // tax.subscribe(taxPaid => {
  //   console.log(`==>Contribution.svelte:26 taxPaid`, taxPaid)
  //   contributions = computeContributions(tax)
  // })

</script>
<section class="contribution" class:hidden="{!$tax}" id="contribution">
  <div class="label">You pay</div>
  <div class="value">{$tax.toLocaleString()}</div>
  <div class="details">in fed taxes yearly</div>
  {#each $contributions as contrib, index }
    {#if index === 0}
      <div class="label">You paid </div>
    {/if}
  <div class="value" style={index?'':'font-weight:bold;'}>{contrib.amount.toLocaleString()}</div>
  <div class="details">{contrib.name}</div>
  {/each}
</section>
<style>
  section.contribution {
    display: grid;
    grid-template-columns: [label] 5rem [value] 3rem [details] 1fr;
    grid-template-rows: repeat( 4, 1rem);
    grid-gap: 0.4rem;
    align-content: center;
    align-items: center;
    & .label {
      grid-column: 1;
      justify-self: end;
      padding-right: 0.9rem;
    }
    & .value {
      align-content: center;
      grid-column: 2;
      color: #510;
      justify-self: end;
      font-size: 1rem;
    }
    & .details {
      grid-column: 3;
    }
  }
  .hidden {
    visibility: hidden;
  }

</style>
