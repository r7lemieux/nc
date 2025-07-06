<script lang="ts">
  import * as store from '../../stores/tax.store'
  import {onMount} from 'svelte'
  import {browser} from '$app/environment'
  import {userInfo} from '$services/domain/tax.computer'
  
  let {done} = $props()
  
  let declaredTax = 0
  // let tax = $state(store.tax)
  
  //let salary = // (browser? window.sessionStorage.salary : 0) || 0
  let period: number = $state(1)
  let income = $derived(userInfo.salary * period)
  let married = $state(false)
  let headOfHouse = $state(false)
  let fileJointly = $state(false)
  // let taxPaidEl: HTMLInputElement = $state() as HTMLInputElement
  let salaryEl: HTMLInputElement = $state() as HTMLInputElement
  
  onMount(() => {
    // console.log(`==>TaxEstimate.svelte:18 onMount`)
    // taxPaidEl.addEventListener(`focus`, () => taxPaidEl.select())
    // console.log(`==>TaxEstimate.svelte:20 onMount`)
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
      userInfo.salary = Number(el['value'])
      income = userInfo.salary * period
      store.income.set(income)
      //if (browser) window.sessionStorage.salary = salary
    }
  }
  
  const periodChanged = ev => {
    period = Number(ev.target.value)
    income = userInfo.salary * period
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
    // console.log(`==>TaxEstimate.svelte:66 fileJointly`, fileJointly)
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
    userInfo.salary = Number(el['value'])
    // console.log(`==>TaxEstimate.svelte:103 income`, income)
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
      userInfo.salary = Number(salaryEl['value'])
      income = userInfo.salary * period
      // console.log(`==>TaxEstimate.svelte:40 income`, income)
      store.income.set(income)
    }
  }
</script>

<section class="estimate">
  <!--  <section class="salary">-->
  <!--    <span class="value">-->
  <label class="salary" for="salary">Salary</label>
  <input class="salary" type=number id="salary" bind:this={salaryEl} value={userInfo.salary || ''}
         onchange="{salaryChanged}" onblur={salaryBlur} onkeyup={salaryKeyUp} />
  <!--    </span>-->
  <select class="period" id="salaryPeriod" name="salaryPeriod" value="{period}" onchange="{periodChanged}">
    <option value={1} selected>Annually</option>
    <option value={12}>Monthly</option>
    <option value={26}>Two Weeks</option>
    <option value={52}>Weekly</option>
    <option value={268}>Daily</option>
    <option value={2144}>Hourly</option>
  </select>
  
  <div class="check">
      <input type="checkbox" id="married" checked={married} onchange="{marriedChanged}"/>
      <label for="married">Married</label>
  </div>
  <div class="check">
      <input disabled={headOfHouse} type="checkbox" id="fileJointly" checked={fileJointly}
             onchange="{fileJointlyChanged}"/>
      <label for="married">File Jointly</label>
  </div>
  <div class="check">
    <input disabled={married} type="checkbox" id="headOfHouse" checked={headOfHouse} onchange="{headOfHouseChanged}"/>
    <label for="headOfHouse">Head Of House</label>
  </div>
  
  <!--    </div>-->
  <!--  </section>-->
  {#if !!income}
    <!--  <div class="youMake">You make</div>-->
    <section class="summary">
      <div class="label">You make</div>
      <div class="summaryLine">
        <span class="salary">{Math.trunc(income).toLocaleString()} </span>
        <span class="unit">/year</span>
      </div>
      <div class="summaryLine">
        <span class="salary"> {Math.trunc(income / 12).toLocaleString()}</span>
        <span class="unit">/month</span>
      </div>
      <div class="summaryLine">
        <span class="salary"> {Math.trunc(income / 26).toLocaleString()}</span>
        <span class="unit">/2weeks</span>
      </div>
      <div class="summaryLine">
        <span class="salary"> {Math.trunc(income / 52).toLocaleString()} </span>
        <span class="unit">/week</span>
      </div>
      <div class="summaryLine">
        <span class="salary"> {Math.trunc(income / 268).toLocaleString()} </span>
        <span class="unit">/day</span>
      </div>
      <div class="summaryLine">
        
        <span class="salary"> {Math.trunc(income / 2144).toLocaleString()}</span>
        <span class="unit">/hour</span>
      </div>
    </section>
  {/if}

</section>

<style>
  
  section.estimate, section.summary {
    display: grid;
    grid-template-columns: [label] 5rem [value] 6rem;
  }
  
  section.estimate {
    grid-template-rows: repeat( 4, 2rem);
    grid-gap: 0.2rem 0.4rem;
    
    /*&::selection {*/
    /*  background-color: transparent;*/
    /*}*/
    
    & label {
      align-content: center;
      grid-column: label;
      text-align: right;
      justify-content: right;
      padding-right: 0.5rem;
    }
    & .label {
      justify-self: end;
      padding-right: 0.5rem
    }
    
    & .check {
      display: flex;
      grid-column: 2 / 4;
      
      & input[type=checkbox] {
        height: 1.5rem;
        width: 1.5rem;
      }
      & label {
        margin: 0 0 0 0.4rem;
        padding: 0;
      }
    }
    
    & input.salary {
      grid-column: 2;
      height: 1.5rem;
      margin: 0 0 0 0.1rem;
      max-width: 7rem;
    }
    
    & .period {
      grid-column: 3;
      width: 5rem;
      height: 1.8rem;
    }
    
  
  }
  
  
  section.summary {
    grid-template-rows: repeat(5, 1.3rem);
    margin: 0.5rem 0 0 0;
    
    & .summaryLine {
      grid-column: 2 / 4;
      display: grid;
      grid-template-columns: 4rem 2rem;
      
      & .salary {
        justify-self: end;
        margin: 0 0.3rem 0 0;
      }
    }
  }

</style>

