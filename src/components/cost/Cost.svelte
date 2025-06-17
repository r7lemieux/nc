<script lang="ts">
  import TaxEstimate from '$components/taxEstimate/TaxEstimate.svelte'
  import Contribution from '$components/contribution/Contribution.svelte'
  //import {taxPaid} from '$stores/tax.store'
  // let {done, taxDone=$bindable(), taxPaid=$bindable()} = $props()
  let {done, taxDone=$bindable()} = $props()

  const contributionDone = () => {
    const el = document.getElementById('where')
    el!.style.opacity = '1'
    // el.style.transition = 'opacity 1s ease 3s'
  }

  const costDone = (ev) => {
    const el = ev.target
    el.disabled = true
    done()
  }



</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<h1>How much do you pay for wars since 2000?</h1>
<section>
  <TaxEstimate done={taxDone}  />
  <br/>
  <Contribution bind:start={taxDone} done={contributionDone} />
  <button id="where" onclick={costDone}>Where did the money go?</button>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
        
    }

    h1 {
        width: 100%;
    }

    button {
        padding: 1.5rem;
        opacity: 0;
    }

</style>
