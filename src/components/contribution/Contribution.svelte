<script lang="ts">
  import {expenses, tax} from '$stores/tax.store'
  import {onMount} from 'svelte'
  import {browser} from '$app/environment'
  
  // let {start = $bindable(), done} = $props()
  // start = (taxPaid: number): void => {
  //   const el1 = document.getElementById('contribution')
  //   el1!.style.visibility = 'visible'
  //   el1!.style.color = '#810'
  //   el1!.style.transition = 'visibility 0.5s, color 1s'
  //
  //   const el = document.getElementById('amount')
  //   el!.style.fontSize = '2rem'
  //   el!.style.color = '#F00'
  //   el!.style.transition = 'font-size 2s, color 1s ease 1s'
  //   done()
  // }
  let contribution = '' //$derived(warContribution(tax).toLocaleString())
  
  // tax.subscribe(taxPaid => {
  //   console.log(`==>Contribution.svelte:26 taxPaid`, taxPaid)
  //   contributions = computeContributions(tax)
  // })
  let timeOfLastChange = Date.now()
  let animTimeoutId
  expenses.subscribe((exp) => {
    clearTimeout(animTimeoutId)
    // const newTime = Date.now()
    // const timeLapse = newTime.valueOf() - timeOfLastChange.valueOf()
    // timeOfLastChange = newTime
    if (browser && document && exp) { //} && timeLapse > 5000) {
      animTimeoutId = setTimeout(() => {
          const els = document.getElementsByClassName('total')
          if (els && els[0]) {
            const totalEl = els[0] as HTMLElement
            console.log(`==>Contribution.svelte:29 totalEl`, totalEl)
            totalEl.style.fontSize = '2rem'
            totalEl.style.color = '#F11'
            totalEl.style.background = 'radial-gradient(#FFF, #CCFEEF)'
            totalEl.style.transition = 'background-image 2s, font-size 2s, color 2s ease 1s'
            setTimeout(() => {
              totalEl.style.fontSize = '1rem'
              totalEl.style.color = '#510'
              totalEl.style.background = 'transparent'
              totalEl.style.transition = 'font-size 2s, color 2s ease 1s'
            }, 2000)
          }
      }, 2000)
    }
  })
  
  onMount(() => {
    // totalEl = document.getElementsByClassName('total')[0]
    // console.log(`==>Contribution.svelte:34 totalEl`, totalEl)
    // totalEl.addEventListener('change', function() {
    //   console.log(`==>Contribution.svelte:29 totalEl`, totalEl)
    //   totalEl.classList.add('double')
    //   setTimeout(()=>totalEl.classList.remove('double'),2000)
    // })
  })

</script>
<section class="contribution" class:hidden="{!$tax}" id="contribution">
  <div class="label">You pay</div>
  <div class="value">{$tax.toLocaleString()}</div>
  <div class="details">in fed taxes yearly</div>
  {#each $expenses as expense, index }
    {#if index === 0}
      <div class="label">You paid</div>
    {/if}
    <div class="value" class:total={!index} id={index?'':'total'}>{expense.amount.toLocaleString()} </div>
    <div class="details">{expense.name}</div>
  {/each}
</section>
<style>
  section.contribution {
    color: #033;
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
    
    & .total {
      font-weight: bold;
    }
    
    & .details {
      color: #033;
      grid-column: 3;
    }
  }
  
  .hidden {
    visibility: hidden;
  }
  
  /*.doubleSize {*/
  /*  transform: scale(2, 2);*/
  /*}*/
</style>
