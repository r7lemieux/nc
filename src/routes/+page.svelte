<script context="module" lang="ts">
  // import Survey from '../components/survey/Survey.svelte'
  // import Profile from '../components/profile/Profile.svelte'
  import Cost from '../components/cost/Cost.svelte'
  // import Results from '../lib/components/results/Results.svelte'
  import {show} from '../lib/services/ui/transition.service'
  import {recordFingerprint} from '../lib/services/sec/id.service'
  import {persist} from '../lib/services/db/persist.service'

  // initFirebase()
  recordFingerprint()

</script>

<script>
  // let initResults: ()=>Promise<void>
  // const gogogo = () => {
  //   show('survey', 0)
  //   show('profile', 0)
  //   return persist()
  //     .then(initResults)
  //     .then(() => show('results', 0))
  // }
  //
  import Footer from '$components/layout/Footer.svelte'
  
  const costDone = () => show('survey', 0)
  // const surveyDone = () => show('profile', 0)
  // const profileDone = () => {
  //   return persist()
  //   .then(initResults)
  //   .then(() => show('results', 0))
  // }

</script>

<section>
<div id="cost" >
<!--    <Cost />-->
    <Cost done={costDone}/>
</div>
<div id="survey">
<!--    <Survey done={surveyDone}/>-->
</div>
<div id="profile">
<!--    <Profile done={profileDone}/>-->
</div>
<div id="results">
<!--    <Results bind:init={initResults}/>-->
</div>
</section>

<style type="scss">

  section {
      display: contents;
      align-self: center;
      div {
          width: 100%;
      }
    #survey, #profile, #results {
        position: relative;
        top: 50rem;
        opacity: 0;
    }
  }
</style>



