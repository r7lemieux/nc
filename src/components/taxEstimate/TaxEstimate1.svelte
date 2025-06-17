<script lang="ts">
  import * as store from '../../stores/tax.store'
  import {onMount} from 'svelte'
  import {tax} from '$stores/tax.store'
  
  let {done} = $props()
  
  let declaredTax = 0
  // let tax = $state(store.tax)
  let salary = 0
  let period: number = $state(1)
  let income = $state(0)
  let married = $state(false)
  let headOfHouse = $state(false)
  let fileJointly = $state(false)
  let taxPaidEl: HTMLInputElement = $state() as HTMLInputElement
  let salaryEl: HTMLInputElement = $state() as HTMLInputElement
  
  onMount(() => {
    console.log(`==>TaxEstimate.svelte:18 onMount`)
    taxPaidEl.addEventListener(`focus`, () => taxPaidEl.select())
    console.log(`==>TaxEstimate.svelte:20 onMount`)
  })
  
  // const deriveTax = (taxPaid) => {
  //   const tax = computeTax(income, married, fileJointly, headOfHouse)
  //   // store.taxPaid.set(tax)
  //   console.log(`==>TaxEstimate.svelte:19 tax`, tax)
  //   return tax
  // }
  // let taxPaid = derived([store.declaredTax, store.income, store.married, store.fileJointly, store.headOfHouse]), deriveTax(store.taxPaid))
  
  
  const salaryChanged = () => {
    const el = document.getElementById('salary') as HTMLInputElement
    if (el) {
      salary = Number(el['value'])
      income = salary * period
      console.log(`==>TaxEstimate.svelte:40 income`, income)
      store.income.set(income)
    }
  }
  
  const periodChanged = ev => {
    period = Number(ev.target.value)
    income = salary * period
    store.income.set(income)
  }
  
  const marriedChanged = ev => {
    married = ev.target.checked
    if (married) {
      headOfHouse = false
      store.headOfHouse.set(false)
    } else {
      fileJointly = false
      store.fileJointly.set(false)
    }
    store.married.set(married)
  }
  
  const fileJointlyChanged = ev => {
    fileJointly = ev.target.checked
    if (fileJointly) {
      married = true
      headOfHouse = false
      store.married.set(true)
      store.headOfHouse.set(false)
    }
    console.log(`==>TaxEstimate.svelte:66 fileJointly`, fileJointly)
    store.fileJointly.set(fileJointly)
  }
  
  const headOfHouseChanged = ev => {
    headOfHouse = ev.target.checked
    if (headOfHouse) {
      married = false
      fileJointly = false
    }
    store.headOfHouse.set(headOfHouse)
  }
  
  const taxBlur = () => {
    if (declaredTax) {
      done(declaredTax)
    }
    // tick().then(() => {
    //   store.declaredTax.set(taxPaid)
    //   if (taxPaid) {
    //     done(taxPaid)
    //   }
    // })
  }
  
  // const taxChanged = () => {
  //   const el: HTMLInputElement = taxPaidEl //document.getElementById('taxPaid')
  //   const newTax = Number(el['value'])
  //   console.log(`==>TaxEstimate.svelte:80 newTax`, newTax)
  //   console.log(`==>TaxEstimate.svelte:80 declaredTax`, declaredTax)
  //   declaredTax = newTax
  //   store.declaredTax.set(declaredTax)
  // }
  //
  const salaryBlur = () => {
    const el: HTMLInputElement = salaryEl //document.getElementById('taxPaid')
    salary = Number(el['value'])
    console.log(`==>TaxEstimate.svelte:103 income`, income)
    store.income.set(salary)
    // tick().then(() => {
    //   store.taxPaid.set(taxPaid)
    // })
  }
  
  let taxTimeout: NodeJS.Timeout
  const taxKeyUp = ev => {
    // clearTimeout(taxTimeout)
    // taxTimeout = setTimeout(taxBlur, 200)
  }
  let salaryTimeout: NodeJS.Timeout
  
  const salaryKeyUp = ev => {
    // clearTimeout(salaryTimeout)
    // clearTimeout(taxTimeout)
    // salaryTimeout = setTimeout(salaryChanged, 2000)
    // taxTimeout = setTimeout(taxBlur, 3000)
    if (salaryEl) {
      salary = Number(salaryEl['value'])
      income = salary * period
      console.log(`==>TaxEstimate.svelte:40 income`, income)
      store.income.set(income)
    }
    store.income.set(salary)
  }
</script>

<section class="estimate">
<!--  <section class="salary">-->
<!--    <span class="value">-->
      <label for="salary">Salary</label>
      <input type=number id="salary" onchange="{salaryChanged}" onblur={salaryBlur} onkeyup={salaryKeyUp}
             bind:this={salaryEl}/>
<!--    </span>-->
    <select class="period" id="salaryPeriod" name="salaryPeriod" value="{period}" onchange="{periodChanged}">
      <option value={1} selected>Annually</option>
      <option value={12}>Monthly</option>
      <option value={26}>Two Weeks</option>
      <option value={52}>Weekly</option>
      <option value={268}>Daily</option>
      <option value={2144}>Hourly</option>
    </select>
    
<!--  </section>-->
  
<!--  <section class="filing row">-->
<!--    <div class="value">-->
<!--      <label for="taxPaid">Tax Paid</label>-->
<!--      <input type="number" id="taxPaid" name="taxPaid" value={$tax} onkeyup={taxChanged} onblur={taxBlur}-->
<!--             bind:this={taxPaidEl} class={tax?'hasValue':'blank'}/>-->
<!--    </div>-->
    <div class="checks">
    <span class="check">
      <input type="checkbox" id="married" checked={married} onchange="{marriedChanged}"/>
      <label for="married">Married</label>
    </span>
    
    <span class="check">
      <input disabled={headOfHouse} type="checkbox" id="fileJointly" checked={fileJointly}
             onchange="{fileJointlyChanged}"/>
      <label for="married">File Jointly</label>
    </span>
    
    <div class="row check">
      <input disabled={married} type="checkbox" id="headOfHouse" checked={headOfHouse} onchange="{headOfHouseChanged}"/>
      <label for="headOfHouse">Head Of House</label>
    </div>
<!--    </div>-->
<!--  </section>-->
  
  {#if !!income}
<!--  <div class="youMake">You make</div>-->
  <section class="summary">
   
          <span class="salary">{Math.trunc(income).toLocaleString()} </span>
          <span class="unit">/year</span>
      
          <span class="salary"> {Math.trunc(income/12).toLocaleString()}</span>
          <span class="unit">/month</span>
     
          <span class="salary"> {Math.trunc(income/26).toLocaleString()}</span>
          <span class="unit">/2weeks</span>
      
          <span class="salary"> {Math.trunc(income/52).toLocaleString()} </span>
          <span class="unit">/week</span>
   
          <span class="salary"> {Math.trunc(income/268).toLocaleString()} </span>
          <span class="unit">/day</span>
   
          <span class="salary"> {Math.trunc(income/2144).toLocaleString()}</span>
          <span class="unit">/hour</span>
  </section>
  {/if}

</section>

<style>
  .estimate {
    display: flex;
    flex-direction: column;
    .blank {
      color: transparent;
      
      &::selection {
        background-color: transparent;
      }
    }
   
    & .value {
      & label {
        /*background-color: #551100;*/
        grid-column-start: label;
        grid-column-end: main;
        text-align: right;
        display: inline-flex;
        width: 4rem;
        justify-content: right;
        padding-right: 0.5rem;
      }
      
      & input {
        height: 1.5rem;
        width: 7rem;
        
        &[type="number"] {
        
        }
      }
    }
    
    & .period {
      grid-column-start: extra;
      width: 5rem;
      height: 1.8rem;
    }
    
    & .filing {
      & .checks {
        display: flex;
        flex-direction: column;
        & .check {
          display: flex;
          align-content: center;
        }
        margin: 0.5rem 0 0 4.5rem;
        & label {
          align-content: center;
        }
      }
    }
    input[type=checkbox] {
      height: 1.5rem;
      width: 1.5rem;
    }
    
    .youMake {
      position: relative;
      top: 1.75rem;
    }
    .summary {
      column-gap: 0;
      display: grid;
      grid-template-columns: [salary] 5rem [unit] 4rem;
      margin: 0.5rem 0 0 3.4em;
      row-gap: 0.2rem;
      
      
      & .salary {
        justify-self: end;
        margin: 0 0.3rem 0 0;
        &:first-child::before {
          content: "You make";
          text-wrap: nowrap;
          position: relative;
          left: -0.8rem;
        }
      }
      /*& .tax {*/
      /*  grid-area: tax;*/
      /*}*/
      /*& .unit {*/
      /*  grid-area: unit;*/
      /*}*/
      
    }
    
    .estimate > label {
      /*grid-column-start: label;*/
      /*grid-column-end: main;*/
      /*text-align: right;*/
    }
    
    .text, .input, .row {
      /*grid-column-start: main;*/
    }
    
    /*.input select {*/
    /*  height: 100%;*/
    /*  top: -0.04rem;*/
    /*  position: relative;*/
    /*}*/
    
    /*.estimate label, .estimate .check input {*/
    /*  align-self: center;*/
    /*}*/
    
    /*.estimate .check {*/
    /*  display: inline-flex;*/
    /*  gap: 0.5rem;*/
    /*  align-items: center;*/
    /*}*/
    
    /*.estimate .check label {*/
    /*  margin: 0 1rem 0 0;*/
    /*}*/
    
    /*.thatIs .value {*/
    /*  */
    /*  margin: 0 0.5rem 0 0rem;*/
    /*  display: inline-flex;*/
    /*  width: 3.2rem;*/
    /*  justify-content: right;*/
    /*}*/
    
    input, select {
      /*height: 1.5rem;*/
      /*padding: 1px;*/
      /*border-width: 2px;*/
    }
  }
</style>

